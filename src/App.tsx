import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './Login.jsx';

function App() {
    const urlSuffix = process.env.NODE_ENV === 'production'
        ? '/heaven-gallery'
        : ''

    console.log(`${urlSuffix}/login`);

    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={`${urlSuffix}/login`} element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
