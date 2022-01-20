import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Sunny from '../img/sunny.png'
import Snow from '../img/snow.png'
import Rain from '../img/rain.png'
import PartialRain from '../img/partial-rain.png'
import Mist from '../img/mist.png'
import Fog from '../img/fog.png'
import Thunderstorm from '../img/thunderstorm.png'
import LightRain from '../img/light-rain.png'


import { UilSearch } from '@iconscout/react-unicons'
function Search() {
    const [search, setSearch] = useState('')


    const [data, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [dataInit,setDataInit] = useState([]);

    const weather_initial = () => {
        const url = `https://api.weatherapi.com/v1/current.json?key=e3fc8b5047434c58b1374503221801&q=mumbai&aqi=yes`
        axios.get(url)
            .then(res => {
                setData1(res.data.current)
                setData2(res.data.location)
                setData3(res.data.current.condition)
                // console.log("hello mumbai");
            })
    }

    useEffect(() => {
        weather_initial()
        // console.log("hello init");
    },[] )

    

    const weather = () => {
        const url = `https://api.weatherapi.com/v1/current.json?key=e3fc8b5047434c58b1374503221801&q=${search}&aqi=yes`
        axios.get(url)
            .then(res => {
                setData1(res.data.current)
                setData2(res.data.location)
                setData3(res.data.current.condition)
                // console.log("hello search");
            })
    }


    return (
        <>

            <div className='weatherInputBody'>
                <input className='weatherInput' id='input' autoComplete='city country' type="text" value={search} onChange={(event) => {
                    setSearch(event.target.value)


                }} onKeyPress={(e) => {if(e.key=='Enter'){weather()};}} placeholder='Enter city name' />
                <button type='submit' onClick={weather}  className='weatherInputBtn' ><UilSearch /></button>
            </div>
            <div className='weatherBody'>

                <h1 className="weatherLocation">
                    {data2.name}
                </h1>
                <p>{data2.region}, {data2.country}</p>
                <h1 className='weatherCondition'>{data3.text}</h1>
                <p className='weatherTemp texture'> {data.temp_c}°</p>

                {/* {yaha} */}
                {(data3.code === 1000) ? <img className='weatherIcon' src={Sunny} alt='weather icon' /> :
                    (data3.code === 1003 || 1006 || 1009 || 1030) ? <img className='weatherIcon' src={PartialRain} alt='weather icon' /> :
                        (data3.code === 1063 || 1180 || 1183 || 1189 || 1186 || 1192 || 1195 || 1198 || 1201) ? <img className='weatherIcon' src={Rain} alt='weather icon' /> :
                            (data3.code === 1273 || 1276 || 1087) ? <img className='weatherIcon' src={Thunderstorm} alt='weather icon' /> :
                                (data3.code === 1030) ? <img className='weatherIcon' src={Mist} alt='weather icon' /> :
                                    (data3.code === 1066 || 1114 || 1210 || 1213 || 1216 || 1219 || 1222 || 1225 || 1237 || 1255 || 1258 || 1279 || 1282) ? <img className='weatherIcon' src={Snow} alt='weather icon' /> :
                                        (data3.code === 1135) ? <img className='weatherIcon' src={Fog} alt='weather icon' /> :
                                            (data3.code === 1240) ? <img className='weatherIcon' src={LightRain} alt='weather icon' /> :
                                                console.log('error occured')
                }

                <div className="weatherDetails">
                    <div className="weatherExtra">
                        <h3>Humidity</h3>
                        <p> <span> {data.humidity}</span>%</p>
                    </div>
                    <div className="weatherExtra">
                        <h3>Cloud cover</h3>
                        <p> <span> {data.cloud}</span>%</p>
                    </div>
                    <div className="weatherExtra">
                        <h3>Pressure</h3>
                        <p> <span> {data.pressure_in}</span>in.</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Search
