import React, { useState, useEffect } from "react";

const Hero = ({ darkMode }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const CITY = "Halifax";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeather({
          city: data.name,
          temp: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [API_KEY]);

  return (
    <section id="hero">
      <h2>Hello, I'm <span className="highlight">Anu Tanna</span></h2>
      <p>A versatile professional skilled in <strong>Computer Science, Mechanical Design,</strong> and <strong>Financial Analysis</strong>.</p>

      {/* Weather Section */}
      {loading ? (
        <p>Loading weather...</p>
      ) : error ? (
        <p style={{ color: "red" }}>️ {error}</p>
      ) : (
        weather && (
          <div className="weather-box">
            <p>🌍 <strong>{weather.city}</strong></p>
            <p>🌡 Temperature: <strong>{weather.temp}°C</strong></p>
            <p>💧 Humidity: <strong>{weather.humidity}%</strong></p>
            <p>⛅ {weather.description}</p>
          </div>
        )
      )}
    </section>
  );
};

export default Hero;
