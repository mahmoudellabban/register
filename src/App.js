import React, { useState } from 'react';
import './App.css'; // You can create a separate CSS file for styling

const RegisterPage = () => {
  const [activeCard, setActiveCard] = useState('signup');

  const handleCardToggle = (cardType) => {
    setActiveCard(cardType);
  };

  return (
    <>
    <div className="register-container">
      <div className="card">
        {activeCard === 'signup' ? (
          <>
            {/* Sign Up card content */}
            <h2>Sign Up</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />

              <button type="submit">Sign Up</button>
            </form>
          </>
        ) : (
          <>
            {/* Log In card content */}
            <h2>Log In</h2>
            <form>
              <label htmlFor="loginUsername">Username:</label>
              <input type="text" id="loginUsername" name="loginUsername" />

              <label htmlFor="loginPassword">Password:</label>
              <input type="password" id="loginPassword" name="loginPassword" />

              <button type="submit">Log In</button>
            </form>
          </>
        )}
      </div>
      <div className="welcome-message">
        {activeCard === 'signup' ? (
          <p>Welcome! Please sign up to continue.</p>
        ) : (
          <p>Welcome back! Log in to access your account.</p>
        )}
      </div>
    </div>
    <div className="card-toggle">
        <button onClick={() => handleCardToggle('signup')}>Sign Up</button>
        <button onClick={() => handleCardToggle('login')}>Log In</button>
      </div>
      </>
  );
};

export default RegisterPage;
