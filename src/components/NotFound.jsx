import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div style={{
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: '#3b82f6' }}>404</h1>
      <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>Oops! The page you're looking for doesn't exist.</p>
      
      <Link to="/" className="btn-primary" style={{ marginTop: '20px', textDecoration: 'none' }}>
        <Home size={20} /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;