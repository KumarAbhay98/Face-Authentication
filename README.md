# Full Stack MERN Application with Face Recognition

# Full-Stack Task

## Overview

This project is a full-stack web application developed as a task. It incorporates user registration, login, and image handling functionalities using various technologies and services. Below is a detailed overview of the project.

## Tech Stack

### Frontend
- React.js with TailwindCSS for styling
- React-Router DOM v6 for routing

### Backend
- Express.js

### Database
- MongoDB

### External Service
- face-api.js

## Demo URLs

### Frontend
- [Frontend Demo](https://codebugged-task.vercel.app/)

### Backend
- [Backend Demo](https://codebugged-server.vercel.app)

## Features Overview

- **Pages:** Created pages as mentioned in the task description:
  - `/` to display user information and pictures.
  - `/login` where users can log in using their username and picture.
  - `/register` to register their face.

- **API Endpoints:** Developed API endpoints using Express.js:
  - `/api/users`: POST Method for user registration, storing user info in the database.
  - `/api/auth`: POST Method to authenticate users.
  - `/api/images`: GET and POST methods for getting and uploading images.

- **Responsive Design:** Created a responsive design to ensure compatibility across various devices.

- **Deployment:** Both frontend and backend are deployed on Vercel.

## Setup

1. Clone the project:

```bash
git clone https://github.com/kamal9494/codebugged-task


This is a full-stack MERN (MongoDB, Express, React, Node.js) application that incorporates face recognition using face-api.js. The application allows users to register and login using their username and facial recognition.

## Face Recognition with face-api.js

The face-api.js library is a powerful JavaScript tool for face detection, recognition, and analysis. It provides various functionalities such as face detection, face landmark detection, and face recognition. In this application, face-api.js is used to enhance the authentication process by allowing users to register and login using their facial features.

## Components of the Website

### Registration

- Users can register using their username and facial features.
- The registration process involves capturing the user's face using their device's camera and storing it securely in the database.

### Login

- Registered users can log in using their username and facial recognition.
- The login process compares the user's facial features captured during registration with the features detected during login to authenticate the user.

### Home Page

- Upon successful login, users are redirected to the home page.
- The home page provides various features and functionalities, depending on the application's purpose.

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




## Deployment

This application is deployed using Vercel. You can deploy your own instance by following these steps:

1. Sign up for an account on [Vercel](https://vercel.com/)
2. Connect your GitHub repository to Vercel
3. Configure your deployment settings
4. Click on "Deploy" to deploy your application

## Authors

- [Abhay Kumar](https://github.com/KumarAbhay98)

## License

This project is licensed under the [MIT License](LICENSE).
