import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Navbar.module.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-brand">
        Vehicle Registration System
      </Link>
      {isAuthenticated && (
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register Vehicle</Link>
          </li>
          <li>
            <Link to="/vehicles">View Vehicles</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logoutButton">
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
