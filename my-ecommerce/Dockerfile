# Use an official Node.js image as a base
FROM node:16-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package* .

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Start the server to serve the build folder
CMD ["npm", "run", "dev"]
