import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "423801836330-a83v044m2fg4rbqusrd6t86d795mco2g.apps.googleusercontent.com"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
    <App />
    </GoogleOAuthProvider>
    </Provider>
    </Router>
  </React.StrictMode>
);

