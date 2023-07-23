
// /////////////////////////////////////
import React, { useEffect, useState } from 'react';
import './Report.css';
import mqtt from 'mqtt';
import DataTable from '../component/Table';
import { Stack } from '@mui/material';
import TemperatureChart from '../component/TemperatureChart';
import HumidityChart from '../component/HumidityChart';
import Footer from './Footer.jsx';

//date
import { format } from 'date-fns'; // Importer la fonction format de date-fns


const MQTT_USER = 'komimawuse@outlook.com';
const MQTT_PASS = 'toto';
const MQTT_HOST = 'maqiatto.com';
const MQTT_PORT = 8883;
const MQTT_ENVDATA_TOPIC = 'komimawuse@outlook.com/envdata';

const Report= () => {
  const [envData, setEnvData] = useState({
    temperature: '',
    humidity: '',
    pm1_0: '',
    pm2_5: '',
    pm10: '',
  });

  const [dataHistory, setDataHistory] = useState([]);

  //Date
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Récupérer la date et le jour de la semaine actuels et les mettre à jour
    const today = new Date();
    const dayOfWeekString = getDayOfWeek(today.getDay());
    const currentDateString = formatDate(today);

    setDayOfWeek(dayOfWeekString);
    setCurrentDate(currentDateString);

    // ...
  }, []);

  // Fonction pour obtenir le jour de la semaine en fonction du numéro du jour (0 pour dimanche, 1 pour lundi, etc.)
  const getDayOfWeek = (day) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[day];
  };

  // Fonction pour formater la date dans le format souhaité (par exemple : "15 Jan 2019")
  const formatDate = (date) => {
    return format(date, 'dd MMM yyyy');
  };

  //Connexion
  useEffect(() => {
    // Créer un client MQTT et se connecter en utilisant WebSocket
    const client = mqtt.connect(`ws://${MQTT_HOST}:${MQTT_PORT}`, {
      username: MQTT_USER,
      password: MQTT_PASS,
    });

    // Configurer les gestionnaires d'événements
    client.on('connect', () => {
      console.log('Connecté au courtier MQTT');
      client.subscribe(MQTT_ENVDATA_TOPIC, (err) => {
        if (!err) {
          console.log(`Abonnement au topic : ${MQTT_ENVDATA_TOPIC}`);
        }
      });
    });


    //Subscription
    client.on('message', (topic, message) => {
      if (topic === MQTT_ENVDATA_TOPIC) {
        const data = message.toString();
        const [temperatureRaw, humidityRaw, pm1_0, pm2_5, pm10] = data.split(' ');
    
        // Nettoyer les valeurs de température et d'humidité en supprimant les caractères spéciaux
        const temperature = parseFloat(temperatureRaw.replace('°C', ''));
        const humidity = parseFloat(humidityRaw.replace('%', ''));
    
        setEnvData({
          temperature: temperature,
          humidity: humidity,
          pm1_0: pm1_0,
          pm2_5: pm2_5,
          pm10: pm10,
        });
    
        //Historical data
        setDataHistory((prevData) => [
          ...prevData,
          {
            time: new Date().toLocaleTimeString(), // Utilisez un horodatage pour l'axe X (ou utilisez une valeur appropriée)
            temperature: temperature,
            humidity: humidity,
            pm1_0: pm1_0,
            pm2_5: pm2_5,
            pm10: pm10,
          },
        ]);
      }
    });

    //Nettoyage
    return () => {
      client.end();
      console.log('Déconnecté du courtier MQTT');
    };
  }, []);

  const calculateNiveau = () => {
    const pm10Value = parseFloat(envData.pm1_0);
    const pm25Value = parseFloat(envData.pm2_5);
  
    if ((pm10Value >= 0 && pm10Value < 20) || (pm25Value >= 0 && pm25Value < 10)) {
      return 'Bon';
    } else if (
      (pm10Value >= 20 && pm10Value < 40) ||
      (pm25Value >= 10 && pm25Value < 20)
    ) {
      return 'Moyen';
    } else if (
      (pm10Value >= 40 && pm10Value < 50) ||
      (pm25Value >= 20 && pm25Value < 25)
    ) {
      return 'Dégradé';
    } else if (
      (pm10Value >= 50 && pm10Value < 100) ||
      (pm25Value >= 25 && pm25Value < 50)
    ) {
      return 'Mauvais';
    } else if (
      (pm10Value >= 100 && pm10Value < 150) ||
      (pm25Value >= 50 && pm25Value < 75)
    ) {
      return 'Très Mauvais';
    } else if (
      pm10Value > 150 ||
      pm25Value > 75
    ) {
      return 'Extrêmement Mauvais';
    } else {
      return 'Niveau non défini';
    }
  };
  

    return (
      <Stack>
      <div className="col-md-12 col-12 mx-auto">
                        <h1 className="text-center main-heading">Explore</h1>
                        <p className="text-center sub-heading">Sensor data</p>
      </div>
        <div className="container ">
          <div className="weather-side">
            <div className="weather-gradient" />
              <div className="date-container">
                <h2 className="date-dayname">{dayOfWeek}</h2> {/* Mettre à jour ici */}
                <span className="date-day">{currentDate}</span> {/* Mettre à jour ici */}
              <i className="location-icon" data-feather="map-pin" />
              <span className="location">Strasbourg, FR</span>
            </div>
            <div className="weather-container">
              <i className="weather-icon" data-feather="sun" />
              <h1 className="weather-temp">{envData.temperature}°</h1>
              <h3 className="weather-desc">enjoy your day</h3>
            </div>
          </div>
          <div className="info-side">
            <div className="today-info-container">
              <div className="today-info">
                <div className="precipitation">
                  <span className="title">HUMIDITY</span>
                  <span className="value">{envData.humidity}</span>
                </div>
              </div>
            </div>
            <div className="week-container">
              <ul className="week-list">
                <li className="active">
                  <i className="day-icon" data-feather="sun" />
                  <span className="day-name">Grain</span>
                  <span className="day-temp">{envData.pm1_0}</span>

                </li>
                <li>
                  <i className="day-icon" data-feather="cloud" />
                  <span className="day-name">PM10</span>
                  <span className="day-temp">{envData.pm10}</span>
                </li>
                <li>
                  <i className="day-icon" data-feather="cloud-snow" />
                  <span className="day-name">PM2,5</span>
                  <span className="day-temp">{envData.pm2_5}</span>
                </li>
              </ul>
            </div>
            <div className="location-container">
              <button className="location-button">
                <i data-feather="map-pin" />
                <span>{calculateNiveau()}</span>
              </button>
          </div>
          </div>
        </div>

        <div className="container mt-5">
          {/* ... (Rest of your JSX code) ... */}
          <DataTable data={dataHistory} 
            highlightOnHover={true}
            responsive={true}
            striped={true}
            dense={true}
            />
        </div>

        <div className="container pt-4 mt-5">
            <div className="chart-container">
                <div className="chart">
                  <h2>Temperature Chart</h2>
                  <TemperatureChart data={dataHistory} />
                </div>
              </div>
        </div>
        <div className="container pt-4 mt-5 my-2">
            <div className="chart-container">
                <div className="chart">
                  <h2>Humidity Chart</h2>
                  <HumidityChart data={dataHistory} />
                </div>
              </div>
        </div>
        <Footer />
    </Stack>
  );
};

export default Report;
// App.js
// MainComponent.js
// import React, { useEffect, useState } from "react";
// import TemperatureChart from "../component/TemperatureChart";
// import HumidityChart from "../components/HumidityChart";
// import MqttDataGrid from "../components/MqttDataGrid";
// import PMChart from "../components/PMChart";

// const Report = () => {
//   const [data, setData] = useState([]);

//   // Simulate receiving data from WebSocket every 5 seconds
//   useEffect(() => {
//     const simulateWebSocketData = () => {
//       const timestamp = new Date().toLocaleString();
//       const temperature = Math.random() * (30 - 20) + 20;
//       const humidity = Math.random() * (80 - 60) + 60;
//       const pm1_0 = Math.random() * (50 - 10) + 10;
//       const pm2_5 = Math.random() * (100 - 20) + 20;
//       const pm10 = Math.random() * (150 - 30) + 30;

//       const newData = {
//         timestamp,
//         temperature,
//         humidity,
//         pm1_0,
//         pm2_5,
//         pm10,
//       };
//       setData((prevData) => [...prevData, newData]);
//     };

//     const intervalId = setInterval(simulateWebSocketData, 5000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Environmental Data</h1>
//       <div>
//         <h2>Temperature Chart</h2>
//         <TemperatureChart data={data} />
//       </div>
//       <div>
//         <h2>Humidity Chart</h2>
//         <HumidityChart data={data} />
//       </div>
//       <div>
//         <h2>PM1.0 Chart</h2>
//         <PMChart data={data} dataKey="pm1_0" />
//       </div>
//       <div>
//         <h2>PM2.5 Chart</h2>
//         <PMChart data={data} dataKey="pm2_5" />
//       </div>
//       <div>
//         <h2>PM10 Chart</h2>
//         <PMChart data={data} dataKey="pm10" />
//       </div>
//       <div>
//         <h2>MQTT Data Table</h2>
//         <MqttDataGrid data={data} />
//       </div>
//     </div>
//   );
// };
