import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import api from "../api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = () => {
  const { user } = useContext(UserContext);
  const [imgs, setImgs] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const url = `${window.location.origin}/images`;
        const method = "GET";
        const images = await api(url, method, null);
        setImgs(images.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchImages();
  }, []);

  return (
    <div className="flex flex-col bg-gray-900 text-red-900 min-h-[90vh] h-full">
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-4">
          Introduction
        </h2>
        <p className="mb-4">
          Face recognition is a powerful technology with diverse applications. This guide delves into integrating face-api.js, a JavaScript library for face detection, into React to build interactive face recognition experiences. We'll cover the installation process, model loading, face detection logic, and integration with React components.
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          Project Setup
        </h2>
        <p className="mb-4">
          Create a React Project:
        </p>
        <pre className="mb-4 bg-gray-800 rounded-md p-4 overflow-auto text-sm">
          <code className="language-bash">
            npx create-react-app face-auth-app
          </code>
        </pre>
        <p className="mb-4">
          Install face-api.js:
        </p>
        <pre className="mb-4 bg-gray-800 rounded-md p-4 overflow-auto text-sm">
          <code className="language-bash">
            npm install face-api.js
          </code>
        </pre>
        <p className="mb-4">
          Component Structure:
        </p>
        <pre className="mb-4 bg-gray-800 rounded-md p-4 overflow-auto text-sm">
          <code className="language-javascript">
            {`import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

const FaceDetection = () => {
  // Component logic
};

export default FaceDetection;
`}
          </code>
        </pre>
        <pre className="mb-4 bg-gray-800 rounded-md p-4 overflow-auto text-sm">
          <code className="language-javascript">
            {`import React, { useState } from 'react';
import FaceDetection from './FaceDetection';

const App = () => {
  // Component logic
};

export default App;
`}
          </code>
        </pre>
      </div>
      <div className="min-h-screen bg-gray-900 w-full p-5">
        <div>
          {!imgs && (
            <div className="mt-5 flex justify-center">
              <AiOutlineLoading3Quarters className="animate-spin" size={25} />
            </div>
          )}
          {!loading && imgs && imgs.length === 0 && (
            <div className="mt-5 text-center">
              <p className="text-xl text-gray-500">There are no images...</p>
            </div>
          )}
          <div className="p-2 md:p-10 flex justify-center gap-5 flex-wrap">
            {imgs &&
              imgs.length > 0 &&
              imgs.map((img, index) => (
                <div key={index} className="relative imageAvatar">
                  <img
                    src={img.base64Image}
                    alt={img.createdAt}
                    className="w-[300px] h-[300px] rounded max-h-[200px] object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-between items-center px-3">
                  </div>
                  <h1 className="text-xl font-semibold">Look how cute you are!</h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
