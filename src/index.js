import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegistrationForm from './Components/RegistrationForm';
import logo from './Images/Logo.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './Components/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
    </header>
    <main className='main'>
      <Router>
        <Routes>
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='/profile' element={'profile'} />
          <Route path='/' element={<SignIn />} />

        </Routes>
      </Router>
    </main>
  </React.StrictMode>
);
