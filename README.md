# Full Stack MERN Application with Face Recognition(face-api.js)

## Overview

This project is a full-stack web application developed as a task. It incorporates user registration, login, and image handling too.Below is a detailed overview of the project.

## Tech Stack

### Frontend
- **React.js** (^18.2.0): A JavaScript library for building user interfaces.
- **React Router DOM** (^6.22.3): Provides routing capabilities for React applications in the browser.
- **Axios** (^1.6.8): A promise-based HTTP client for making asynchronous HTTP requests in the browser and Node.js environment.
- **@radix-ui/react-alert-dialog** (^1.0.5): Provides components for creating alert dialogs in React applications.
- **@radix-ui/react-dialog** (^1.0.5): Provides components for creating dialogs in React applications.
- **clsx** (^2.1.0): A utility for constructing className strings conditionally in JavaScript.
- **lucide-react** (^0.364.0): A library of SVG icons as React components.
- **react-icons** (^5.0.1): A library of popular icons for React applications.
- **react-webcam** (^7.2.0): A React component for accessing the webcam and capturing images or video.
- **tailwind-merge** (^2.2.2): A utility for merging tailwind CSS classes together in JavaScript.
- **tailwindcss-animate** (^1.0.7): A collection of CSS animations for use with Tailwind CSS.

### Backend
- **Express.js** (^4.19.2): Web application framework for Node.js, used for handling HTTP requests, routing, and middleware.
- **bcrypt** (^5.1.1): A library for hashing passwords securely.
- **body-parser** (^1.20.2): Node.js body parsing middleware, used for parsing incoming request bodies.
- **canvas** (^2.11.2): A Cairo-backed Canvas implementation for Node.js, used for image manipulation.
- **cors** (^2.8.5): Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
- **dotenv** (^16.4.5): A module for loading environment variables from a .env file into process.env.
- **jsonwebtoken** (^9.0.2): JSON Web Token implementation for Node.js, used for creating and verifying JWTs for authentication.
- **mongoose** (^8.2.4): MongoDB object modeling tool for Node.js, used for interacting with MongoDB databases.
- **multer** (^1.4.5-lts.1): Middleware for handling multipart/form-data, used for file uploads.
- **nodemon** (^3.1.0): A utility that automatically restarts the Node.js application when file changes are detected during development.
- **path** (^0.12.7): A Node.js module providing utilities for working with file and directory paths.

### Database
- MongoDB

### External Service
- face-api.js(face-api.js is a powerful JavaScript library for face detection, recognition, and analysis. It provides a wide range of functionalities such as face detection, face landmark detection, face recognition, and face expression analysis. Leveraging state-of-the-art deep learning algorithms, face-api.js allows developers to easily incorporate advanced facial recognition capabilities into their web applications. With its intuitive API and comprehensive documentation, developers can quickly integrate features like user authentication based on facial features, emotion detection in images, and more. Whether you're building a security application, a virtual try-on experience, or a photo editing tool, face-api.js provides the tools necessary to create engaging and innovative experiences centered around facial analysis.)

## Demo URLs
### Frontend
- [website](https://face-authentication-alpha.vercel.app/)

## Features Overview

- **Pages:** Created pages as mentioned in the task description:
  - `/` to home and user's photo along with a documentation that how to use face-api.js.
  - `/login` where users can log in using their username and picture.
  - `/register` to register their face.

- **API Endpoints:** Developed API endpoints using Express.js:
  - `/api/users`: POST Method for user registration, storing user info in the database.
  - `/api/auth`: POST Method to authenticate users.
  - `/api/images`: GET and POST methods for getting and uploading images.

- **Deployment:** Whole application is deployed on backend Vercel.

## Setup

1. Clone the project:

```bash
https://github.com/KumarAbhay98/Face-Authentication.git
```
2. Navigate to Client and run
```bash
cd client
npm install
npm run dev
```
3.Navigate to server to run backend
```bash
cd server
npm install
npm run dev
```
This is a full-stack MERN (MongoDB, Express, React, Node.js) application that incorporates face recognition using face-api.js. The application allows users to register and login using their username and facial recognition.

### Technologies Used

- React: Frontend library for building user interfaces
- Tailwind CSS: Utility-first CSS framework for styling
- Express: Web application framework for Node.js
- MongoDB: NoSQL database for storing user data
- Node.js: JavaScript runtime for server-side development
- Vercel: Deployment platform for hosting the application

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Set up environment variables: Refer to `.env.example` for required environment variables
5. Start the server: `npm start`
6. Open your browser and navigate to `http://localhost:3000`

## Authors

- [Abhay Kumar](https://github.com/KumarAbhay98)

## License

This project is licensed under the [MIT License](LICENSE).
