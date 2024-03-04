import React, { useState } from 'react';
import './App.css'; 

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
            <h2>Sign Up</h2>
            <form>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />

              <button type="submit">Sign Up</button>
            </form>
          </>
        ) : (
          <>
            <h2>Log In</h2>
            <form>
            <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="loginPassword">Password:</label>
              <input type="password" id="loginPassword" name="loginPassword" />

              <button type="submit">Log In</button>
            </form>
          </>
        )}
      </div>
      <div className="welcome-message">
        {activeCard === 'signup' ? (
          <div>
          <p>Already have an account? Click to Log in</p>
          <button onClick={() => handleCardToggle('login')}>Log In</button>
          </div>
        ) : (
          
          <div>
          <p>Click to register if you don't have an account</p>
          <button onClick={() => handleCardToggle('signup')}>Sign Up</button>
          </div>
        )}
      </div>
    </div>
    <div className="card-toggle">
      </div>
      </>
  );
};

export default RegisterPage;
