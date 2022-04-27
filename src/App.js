import React, {useState} from "react";
import axios from "axios";
import './index.css'

function App() {
  const [data,setdata]=useState({})
  const [city, setcity]=useState('')

const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

const search=(event)=>{
  if(event.key==='Enter'){
    axios.get(api_url).then((response)=>{
      setdata(response.data)
      console.log(response.data)
    })
    setcity('')  
  }
  
}

  return (
    <div className="Out">
      <div className="search">
        <input
        value={city}
        onChange={event => setcity(event.target.value)}
        onKeyPress={search}
        placeholder='Enter Location'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}&deg;F</h1> : null }
          </div>
          <div className="Description">
            {data.weather? <p>{data.weather[0].main}</p> : null}
          </div>

        </div>
        <div className="bottom">
          <div className="feels">
            {data.main? <p>{data.main.feels_like}&deg;F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.main? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind? <p>{data.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
