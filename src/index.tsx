import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from './components/App.tsx';
import Home from './components/Home.tsx';
import NavigationBar from './components/NavigationBar.tsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <div>
    <React.StrictMode>
      <title>My Profile</title>
      <NavigationBar />

      <Home />
      <button className="btn" onClick={() => {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        });
      }}>
        Jump to Top
      </button>
    </React.StrictMode>
  </div>
)

