import React from 'react';
import './HomePage.css'; 
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <header className="header">
        <h1>Welcome to The Krusty Krab!</h1>
        <p>Your favorite place in Bikini Bottom for the finest culinary experience.</p>
      </header>
      
      <div className="button-container">
        <button className="login-button" onClick={()=>navigate('/Login')}>
          Login
        </button>
        
        <button className="signup-button" onClick={()=>navigate('/SignUp')}>
          Sign Up
        </button>
      </div>
      
      <section className="menu-preview">
        <h2>Explore Our Menu</h2>
        <p>Try the legendary Krabby Patty and other delicious dishes.</p>
      </section>
    </div>
  );
};

export default HomePage;
