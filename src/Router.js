import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weather from './pages/Weather/Weather';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
