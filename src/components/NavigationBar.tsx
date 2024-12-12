import React from "react";
// import { Link } from "react-router-dom"; // Optional if you are using React Router for navigation
import "./NavigationBar.css"; // Import the CSS file for styling
import App from "./App.tsx";
import Home from "./Home.tsx";


const NavigationBar: React.FC = () => {
    return (
        <div className="navigation-bar">
            <div className="navigation-logo">
                <h1>MyApp</h1>
            </div>
            <div className="navigation-links">
                {/* Replace Link with <a> if you're not using React Router */}
                <a>Home</a>
                <a>About me</a>
                <a>Services</a>
                <a>Contact</a>
            </div>
        </div>
    );
};

export default NavigationBar;