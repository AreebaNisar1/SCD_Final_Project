# SCD Final Project: Property Management Application

## Project Overview
This project demonstrates the setup of a local Kubernetes cluster using Minikube, deployment of a property management web application, and automation with GitHub Actions. The application is a MERN (MongoDB, Express.js, React, Node.js) stack-based property management system, containerized with Docker, pushed to Docker Hub, and managed with Kubernetes manifests. The goal is to explore core Kubernetes concepts (pods, services, deployments) while integrating CI/CD practices.

### Technologies Used
- **Frontend**: React (under `/app/frontend/`)
- **Backend**: Node.js with Express (under `/app/backend/`)
- **Database**: MongoDB (connected via `MONGO_URI`)
- **Containerization**: Docker
- **Orchestration**: Kubernetes with Minikube
- **CI/CD**: GitHub Actions
- **Version Control**: GitHub

## Project Structure
SCD_Final_Project/
├── app/
│   ├── backend/          # Node.js backend code (e.g., index.js, package.json)
│   ├── frontend/         # React frontend code
│   └── ...               # Other app files
├── Dockerfile            # Docker configuration for the app
├── deployment.yaml       # Kubernetes deployment manifest
├── service.yaml          # Kubernetes service manifest
├── .github/              # GitHub Actions workflow
│   └── workflows/
│       └── deploy.yml    # CI/CD workflow file
└── README.md             # This file

text

Copy

## Running Instructions

### How to Start the App from Scratch
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AreebaNisar1/SCD_Final_Project.git
   cd SCD_Final_Project
Install Dependencies:
Navigate to the backend directory:
bash

Copy
cd app/backend
Install Node.js dependencies:
bash

Copy
npm install
Navigate to the frontend directory (if separate):
bash

Copy
cd ../frontend
npm install
Set Up Environment Variables:
Create a .env file in app/backend/ with your MongoDB URI:
text

Copy
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Replace <username>, <password>, and <dbname> with your MongoDB Atlas credentials.
Run the Application Locally:
Start the backend:
bash

Copy
cd ../backend
npm start
Start the frontend (in a new terminal):
bash

Copy
cd ../frontend
npm start
The app should be accessible at http://localhost:5000 (adjust port if different, e.g., 3000 for frontend).
How to Deploy it Locally Using Minikube
Install Prerequisites:
Ensure Docker, Minikube, and kubectl are installed (see Environment Setup below for versions).
Start Minikube:
bash

Copy
minikube start
Configure Docker for Minikube:
bash

Copy
eval $(minikube docker-env)
Build the Docker Image:
bash

Copy
docker build -t areebanisar1/property-management-app:latest .
Apply Kubernetes Manifests:
Create a custom namespace:
bash

Copy
kubectl create namespace property-ns
Apply the deployment and service manifests:
bash

Copy
kubectl apply -f deployment.yaml -n property-ns
kubectl apply -f service.yaml -n property-ns
Verify Deployment:
Check resources:
bash

Copy
kubectl get deployments -n property-ns -o wide
kubectl get services -n property-ns -o wide
kubectl get pods -n property-ns -o wide
How to View the Running Application
Access the app using Minikube:
bash

Copy
minikube service property-management-service -n property-ns
This opens the app in your default browser (e.g., http://192.168.49.2:30953).
Alternatively, use minikube tunnel if needed:
bash

Copy
sudo minikube tunnel
Retry the service command after starting the tunnel.
Environment Setup
Operating System: Ubuntu 22.04
Docker: <output of docker --version>
Minikube: <output of minikube version>
kubectl: <output of kubectl version --client>
curl: <output of curl --version>
Issues Faced and Solutions
MongoDB Connection Error:
Issue: App crashed due to undefined MONGO_URI in Kubernetes pod.
Solution: Added MONGO_URI environment variable to deployment.yaml and reapplied the manifest.
Screenshot: Logs showing error, updated deployment.yaml, new logs.
Minikube Networking Issue:
Issue: ERR_CONNECTION_REFUSED when accessing the app via 192.168.49.2:30953.
Solution: Used minikube service and minikube tunnel to resolve.
Screenshot: Browser error, tunnel output.
GitHub Actions Runner Setup:
Issue: Initial configuration failed due to token mismatch.
Solution: Regenerated token and ran ./config.sh successfully.
Screenshot: Error log, successful ./run.sh output.
Docker Build Dependency Errors:
Issue: Build failed due to missing Node.js packages.
Solution: Updated package.json and rebuilt the image.
Screenshot: Build error, updated package.json, successful build.
Git Push Authentication Issue:
Issue: Authentication failed during git push.
Solution: Re-authenticated with GitHub credentials and resolved.
Screenshot: Error message, successful push output.
Contributors
Areeba Nisar (areebanisar1)
Fawad Humayun (fawad57)
