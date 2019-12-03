# GCP-typescript-react-golang-mongodb-101

## Deploy Golang app to Google App Engine (GCP)

```bash
# setup your environment on local
sudo gcloud components update
sudo gcloud components install app-engine-go

# Autheticate your acount
gcloud auth login

# create the project for golang
gcloud projects create gcp-golang-101 --set-as-default
gcloud projects describe gcp-golang-101

# create Google App Engine
gcloud app create --project=gcp-golang-101
-> select [2] asia-northeast1 (Tokyo region)

# deploy
cd server
gcloud app deploy
```
