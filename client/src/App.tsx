import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://gcp-golang-101.appspot.com"
});

const App: React.FC = () => {
  const [data, setData] = useState({ test: "" });

  useEffect(() => {
    axiosBase.get("/api/user/naoto/kick").then(({ data }) => {
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modified!! Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
