import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "1044924794976-n418rqsvep3iiaiecfsqlkf1jf5895is.apps.googleusercontent.com"

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

