import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQRnFzDbUTTDq-M5fZrTbVIkQq0FjVano",
  authDomain: "my-react-blog-0309.firebaseapp.com",
  projectId: "my-react-blog-0309",
  storageBucket: "my-react-blog-0309.appspot.com",
  messagingSenderId: "673752078334",
  appId: "1:673752078334:web:6c5eebc468534035a8d2af",
  measurementId: "G-Y8G9YMYRRK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
