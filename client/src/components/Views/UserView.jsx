import React from "react";
import { NavLink } from "react-router-dom";

const UserView = ({ children, user }) => {
  if (user) return <>{children}</>;
  else
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 view">
        <div className="max-w-md w-full mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Welcome to the Face-Auth application
          </p>
          <p className="text-sm md:text-base mb-4">
            Face-auth is a sophisticated application that utilizes advanced
            face recognition technology provided by the face-api.js library.
            With face-api.js, you can implement powerful face detection,
            recognition, and analysis features directly in your web
            applications.
          </p>
          <p className="text-sm md:text-base mb-4">
            The face-api.js library offers various functionalities, including:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base mb-4">
            <li>Face detection</li>
            <li>Face landmark detection</li>
            <li>Face recognition</li>
          </ul>
          <p className="text-sm md:text-base mb-8">
            By integrating face-api.js into your React application, you can
            create engaging and interactive experiences that leverage the power
            of facial recognition technology. Whether you're building a
            security system, a personalized user experience, or a fun
            application, face-api.js provides the tools you need to bring your
            ideas to life.
          </p>
          <p className="text-sm md:text-base mb-4">
            Ready to try it out? Login now!
          </p>
        </div>
        <NavLink
          className="bg-red-800 w-48 md:w-[200px] py-2 rounded-md text-white text-center hover:bg-red-900"
          to="/login"
        >
          Login
        </NavLink>
      </div>
    );
};

export default UserView;

