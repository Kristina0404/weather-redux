import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import styles from "./WeatherForm.module.css";
import { useNavigate } from 'react-router-dom';

const WeatherForm: React.FC = (): JSX.Element => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // отключаем дефолтное поведение тега (form), те не переходим на следующую страницу
    e.preventDefault();
    dispatch(fetchWeather(city)); // из slice
    setCity("");
    navigate('weather info');
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Узнайте погоду в Вашем городе</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter city name"
          // ниже двусторонняя связка состояния и input
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button type="submit" className={styles.btn}>Weather info</button>
      </form>
    </div>
  );
};
export default WeatherForm;
