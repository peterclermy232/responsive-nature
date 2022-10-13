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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


