import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div className="container"><div className="card"><p>Loading...</p></div></div>;
  }

  return (
    <div className="container">
      <div className="card">
        <div className="dashboard-header">
          <h1 className="welcome">Welcome, {user.name}! 🎉</h1>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="message info">
          ✅ You are successfully logged in
        </div>

        <div className="dashboard-card">
          <p>User Name:</p>
          <strong>{user.name}</strong>
        </div>

        <div className="dashboard-card">
          <p>Email Address:</p>
          <strong>{user.email}</strong>
        </div>

        <div className="dashboard-card">
          <p>Account Created:</p>
          <strong>{new Date(user.createdAt).toLocaleDateString()}</strong>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;