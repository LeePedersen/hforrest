import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import {createRoot} from "react-dom/client";

// const container = document.getElementById("react");
// const root = createRoot(container);
// root.render

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
