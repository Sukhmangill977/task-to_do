import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignUpPage';
import ToDoPage from './components/ToDoPage';
import PrivateRoute from './components/PrivateRoute';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './components/ ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ position: 'fixed', top: 10, right: 10 }}>
        <ThemeToggle />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<ToDoPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
