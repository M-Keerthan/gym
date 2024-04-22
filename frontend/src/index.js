import ReactDOM from 'react-dom/client';
import React from 'react'
import { WorkoutsContextProvider } from './context/WorkoutsContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
);
