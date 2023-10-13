import React, {useState, useEffect} from 'react';
import Auth from "./pages/Auth/Auth"
import Home from "./pages/Home/Home"
import { createTheme, ThemeProvider } from '@mui/material';
import {Routes, Route, useLocation} from 'react-router-dom'

// import DetailedSummary from './pages/DetailedSummary/DetailedSummary';
import { useDispatch } from "react-redux";
import { login, verify } from "./features/userSlice";


const theme = createTheme({
  palette:{
    primary:{
      main: "#424874"
    },
    secondary:{
        main:"#A6B1E1"
    },
    background:{
      paper:"#424874"
    }
  }
})

function App() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(verify());

  }
  , [])

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Routes>
                <Route path="/" element={<Home />} >
                </Route>
                <Route path="/auth" element={<Auth />} />
        </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
