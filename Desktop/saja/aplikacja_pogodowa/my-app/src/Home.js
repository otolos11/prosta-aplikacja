import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const api = {
    key: "b1304a2605dab60190fa3670328cf252",
    base: "https://api.openweathermap.org/data/2.5/"
}

function Home() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
            });
        }
    }

    const dateBuilder = (d) => {
        let months = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Wrzesinia", "Października", "Listopada", "Grudnia"];
        let days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

        
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let day = days[d.getDay()];

        return `${date} ${month} ${year} ${day}`
    }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 24) ? 'app hot' : 'app') : 'app'}>
        <main>
            <div className="search-box">
            <input 
                type="text"
                className="search-bar"
                placeholder="Sprawdź pogodę..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />
            </div>
            <ul>
                <li><Link to="/subpage">Subpage</Link></li>
            </ul>
            {(typeof weather.main != "undefined") ? (
            <div>
            <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                {Math.round(weather.main.temp)}°c
                </div>
                <div className="weather">{weather.weather[0].main}</div>
            </div>
            </div>
            ) : ('')}
        </main>
        </div>
    );
}

export default Home;