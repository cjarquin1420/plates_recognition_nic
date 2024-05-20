import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegisterVehicle from './pages/RegisterVehicle';
import VehicleList from './pages/VehicleList';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './AuthContext';
import './App.css';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path="/register" element={isAuthenticated ? <RegisterVehicle /> : <Navigate to="/login" />} />
      <Route path="/vehicles" element={isAuthenticated ? <VehicleList /> : <Navigate to="/login" />} />
    </Routes>
  );
};

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <Navbar />}
        <AppRoutes />
      </div>
    </Router>
  );
};

const Root: React.FC = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default Root;
