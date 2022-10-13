import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './stylesheets/App.css';
import './stylesheets/Comment.css';
import './stylesheets/Grid.css'
import './stylesheets/Project.css';
import './stylesheets/SignupLogin.css';
import './stylesheets/Submit.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

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
