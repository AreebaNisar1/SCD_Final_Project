# Use Node.js 18 as the base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json from the backend directory
COPY app/backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy the entire app directory
COPY app/ ./app/

# Build the frontend
WORKDIR /app/app/frontend
RUN npm install
RUN npm run build

# Move the frontend build output to the backend's public folder
RUN mv dist/ ../backend/public

# Set working directory back to backend
WORKDIR /app/app/backend

# Expose port 5000
EXPOSE 5000

# Start the backend (which serves the frontend)
CMD ["npm", "start"]
