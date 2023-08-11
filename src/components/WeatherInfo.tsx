import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import styles from './WeatherInfo.module.css';
import { Link } from 'react-router-dom';

const WeatherInfo: React.FC = ():JSX.Element |null => {
 
    const {data, error, loading} = useSelector((state: RootState)=>state.weather); // достали всё из store
   if(error){
    return <div>Error: { error } 
    <Link to="/" className={styles.link}>Weather Form</Link>
    </div>
   }
   if(loading){
    return <div>Loading:....</div>
   }
   if(!data) {
    return null;
   }
    
  return (
    <div className={styles.box}>
    <Link to="/" className={styles.link}>Weather Form</Link>
    
    <div className={styles.container}>
      <div className={styles.weatherContainer}>

        <p className={styles.city}>{data?.name}</p>
        <p className={styles.temp}>{(data?.main.temp - 273.15).toFixed(1)}&#8451;</p>
        <p className={styles.desc}>{data?.weather[0].description}</p>
        <p className={styles.otherDates}>Atmosphere pressure: {(data.main.pressure / 1.33322).toFixed(1)} mmHg column</p>
        <p className={styles.otherDates}>Humidity: {data.main.humidity} %</p>
        <p className={styles.otherDates}>Windspeed: {data.wind.speed} m/s</p>
        <p className={styles.otherDates}>Winddirection: {data.wind.deg}</p>

      </div>
      </div>
    </div>
    
    
  )
}

export default WeatherInfo