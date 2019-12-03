# GCP-typescript-react-golang-mongodb-101

## Setup gcloud

```bash
# setup your environment on local
sudo gcloud components update
sudo gcloud components install app-engine-go

# Autheticate your acount
gcloud auth login
```

## How to write a `app.yaml` file

[app.yaml Configuration File](https://cloud.google.com/appengine/docs/standard/go/config/appref)

## Deploy Golang app (Backend) to Google App Engine (GCP)

[Quickstart for Go 1.12+ in the App Engine Standard Environment](https://cloud.google.com/appengine/docs/standard/go/quickstart)

```bash
# setup your environment on local
sudo gcloud components update

# create the project for golang
gcloud projects create gcp-golang-101 --set-as-default
gcloud projects describe gcp-golang-101

# create Google App Engine
gcloud app create --project=gcp-golang-101
-> select [2] asia-northeast1 (Tokyo region)

# deploy
gcloud app deploy server/app.yaml --project gcp-golang-101
```

## Deploy React app (Frontend) to Google App Engine (GCP)

[Quickstart for Node.js in the App Engine Standard Environment](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart)

```bash
# setup your environment on local
sudo gcloud components update

# create the project for golang
gcloud projects create gcp-react-101 --set-as-default
gcloud projects describe gcp-react-101

# create Google App Engine
gcloud app create --project=gcp-react-101
-> select [2] asia-northeast1 (Tokyo region)

# deploy
cd client
gcloud app deploy
```

You may need to enable Cloud Build API for this GCP project.

## Cloud Build on GCP

At first, setup a Cloud Build GitHub App that allows you to automatically build your code each time you push a new commit to GitHub.

[Cloud Build GitHub アプリ](https://github.com/marketplace/google-cloud-build)

After that, follow the next step.

[Running builds on GitHub](https://cloud.google.com/cloud-build/docs/run-builds-on-github)

[Creating a basic build configuration file](https://cloud.google.com/cloud-build/docs/configuring-builds/create-basic-configuration)

- Go to the Google Cloud Console -> IAM & admin -> IAM.
- Locate the service account and click the pencil icon.
- Add the role "App Engine Deployer" to the service account.

[gcloud - ERROR: (gcloud.app.deploy) Permissions error fetching application](https://stackoverflow.com/questions/56126481/gcloud-error-gcloud-app-deploy-permissions-error-fetching-application)
