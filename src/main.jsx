import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home'; 
import Api from './Pages/Api/Api'; 
import Login from './Pages/Login/Login'; 
import Balance from './Pages/Balance/Balance';
import Profile from './Pages/Profile/Profile';
import Reports from './Pages/Reports/Reports'
import { UserProvider } from './Context/context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} /> 
            <Route path="api" element={<Api />} /> 
            <Route path="login" element={<Login />} /> 
            <Route path="balance" element={<Balance />} />
            <Route path="profile" element={<Profile />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
