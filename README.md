# Full Stack MERN Application with Face Recognition

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

   # Note

I am currently in the process of troubleshooting deployment issues with this project. While the application functions flawlessly on my local machine, I have encountered difficulties deploying it on Vercel. Despite numerous attempts, I have been unable to resolve the issue, particularly regarding the CSS files not loading correctly on Vercel.

Rest assured, I am actively working to rectify these issues. In the meantime, I have prepared a video demonstration showcasing the correct functionality of the application on my local environment. You can view the video [here](https://drive.google.com/file/d/1wuhj7pE_iXwg113zIzPC8GctMFitF-ut/view?usp=sharing).

Your patience and understanding are greatly appreciated as I work to resolve these deployment issues.


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
