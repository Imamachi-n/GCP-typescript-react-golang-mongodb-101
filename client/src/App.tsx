import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import firebase from "./firebase";

const axiosBase = axios.create({
  baseURL: "https://gcp-golang-101.appspot.com"
});

interface UserStatus {
  user: firebase.User | null;
}

// Component<props, states>
class App extends React.Component<{}, UserStatus> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  login() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        console.log(result.user);
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log("Error: ", errorCode, errorMessage, email, credential);
        // ...
      });
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          UID: {this.state.user && this.state.user.uid}
        </p>

        {this.state.user ? (
          <button onClick={this.logout}>Facebook Logout</button>
        ) : (
          <button onClick={this.login}>Facebook Login</button>
        )}
      </div>
    );
  }
}

// const App: React.FC = () => {
//   const [data, setData] = useState({ test: "" });

//   useEffect(() => {
//     axiosBase.get("/api/user/naoto/kick").then(({ data }) => {
//       setData(data);
//       console.log(data);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Modified!! Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

export default App;
