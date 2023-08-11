import React from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import WeatherForm from './components/WeatherForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
				<Route index element={<WeatherForm />} />
				<Route path="weather info" element={<WeatherInfo />} />
        </Route>
    </Routes>
  );
}

export default App;
