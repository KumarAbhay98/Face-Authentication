import React, { createContext, useState, useEffect } from "react";
import Cookies from "universal-cookie"; // Importing the universal-cookie module to work with browser cookies.
import { jwtDecode } from "jwt-decode"; // Importing the jwt-decode module to decode JSON Web Tokens (JWTs).

export const UserContext = createContext(); // Creating a context for managing user authentication state across the application.

// Functional component responsible for providing the user authentication context to its children.
export const UserProvider = ({ children }) => {
  // State variable to hold the user authentication state.
  const [user, setUser] = useState(null);
  const cookies = new Cookies(); // Creating a new instance of Cookies to interact with browser cookies.

  // Effect hook to run once after the component mounts.
  useEffect(() => {
    // Retrieving the JWT token from browser cookies, or setting it to null if not found.
    const token = cookies.get("token") || null;
    // Decoding the JWT token to extract user information, or setting it to null if the token is null.
    const decode = token ? jwtDecode(token) : null;
    // Setting the user state based on the decoded token.
    setUser(
      token
        ? {
            name: decode.username,
          }
        : null
    );
  }, []);

  // Function to update the user state when a user logs in.
  const loginUser = (data) => {
    console.log(data);
    setUser(data);
  };

  // Function to clear the JWT token from browser cookies and reset the user state to null when a user logs out.
  const logoutUser = () => {
    cookies.remove("token");
    setUser(null);
  };

  // Creating an object containing the user state and related functions to provide to consuming components via context.
  const contextValues = {
    user,
    loginUser,
    logoutUser,
  };

  // Rendering the children components wrapped with the context provider, providing access to the user authentication context.
  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};
