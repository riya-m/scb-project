import React, { StrictMode } from 'react';
import './App.css';
import { Routes, Route, HashRouter} from 'react-router-dom';

import Login from "./pages/login/Login";
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;

