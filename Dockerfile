# Use Nginx as the base image
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/nginx.conf
# Copy the contents of the 'dist' folder to the default Nginx web root directory
COPY dist/tailwind22/browser/ /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
