import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import App from './components/App.tsx';
import Home from './components/Home.tsx';
import ProjectList from './components/ProjectList.tsx';
import NavigationBar from './components/NavigationBar.tsx';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <div>
    <React.StrictMode>
      <title>My Profile</title>
      <NavigationBar />

      <Home />
      <App />

      <ProjectGallery />
   

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

function ProjectGallery() {
  const projects = [
    {
      id: 0,
      title: "QuotesAPI",
      imageUrl: "https://i.pinimg.com/736x/36/8a/cd/368acd1573660a6daf61ca7c9767ec27.jpg",
      projectUrl: "https://github.com/xTaig4/QuotesAPI"
    },
    {
      id: 1,
      title: "WeebWords",
      imageUrl: "https://i.pinimg.com/736x/56/02/a6/5602a68a7ca6f18ee4e67f4d69b5615e.jpg",
      projectUrl: "https://github.com/xTaig4/WeebWords"
    }
  ];

  return <ProjectList projects={projects} />
}

