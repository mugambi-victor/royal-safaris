# Use Node.js Alpine as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json separately and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Expose the port on which the Angular development server will run
EXPOSE 4200

# Set the default command to start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]
