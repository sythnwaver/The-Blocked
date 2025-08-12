import React from 'react';
import './Window.css';
import AuthTabs from '../LoginPage/AuthTabs';

const RetroWindow = () => {
  return (
    <div className="retro-window">
      <div className="retro-titlebar">
        <span className="retro-title">Get to know you Page</span>
        <div className="retro-buttons">
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
        </div>
      </div>
      <div className="retro-body">
        <AuthTabs/>
      </div>
    </div>
  );
};

export default RetroWindow;
