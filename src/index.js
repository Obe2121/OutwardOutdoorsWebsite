import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this points to your global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* App Component with Particle Background */}
  </React.StrictMode>
);

// Report web vitals (optional)
reportWebVitals();
