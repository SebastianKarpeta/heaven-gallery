import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.jsx';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
