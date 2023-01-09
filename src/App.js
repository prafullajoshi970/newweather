import axios from "axios";
import {  useState } from "react";
import './App.css';

function App() {



  const [City, setCity] = useState("mumbai");
  const [data, setData] = useState({});
  const [value1,setValue]= useState({});

console.log (data);
  const getWether = (cityName) => {
    if (!cityName) return
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4d8fb5b93d4af21d66a2948710284366`
    axios.get(apiURL).then((res) => {
  
      setData(res.data)
    }).catch((err) => {
      
    })
  }

  const ChangeInput = (e) => {
   
    setCity(e.target.value)
   
  }


  const Search = () => {
    getWether(City)
  }
  
  const London = (e) => {
    setCity(e.target.value)
   getWether(City)
   setValue(data.main)
  }
console.log(value1)


  return (
    <div>
      <div className="header"><h1 className="heading">Prafulla Joshi Weather App</h1></div>
      <div className='container'>
<div className="left"> <>
        <h4>Get wheather</h4>
        <h4>cities</h4>
        {/* <h6 >Double click to get data⬇️⬇️⬇️</h6> */}
       
            <button value={"London"} onClick={London}>London</button>
            <button value={"Delhi"} onClick={London}>Delhi</button>
            <button value={"Mumbai"} onClick={London}>Mumbai</button>
            <button value={"Pune"} onClick={London}>Pune</button>
           
        
        </></div>

<div className="right">
        <div className="inputt">
          <input type="text" className="form-control"
           
            placeholder="search city here"
            onChange={ChangeInput} />
          <button className="btn" type="button"
            onClick={Search}
          >Search</button>
        </div>
        
      {Object.keys(data).length > 0 &&
        <div className="display">                    
                     <>
          <tr>
          <th>city</th>
          <th>temp</th>
          <th>humidity</th>
          <th>temp_max</th>
          <th>temp_min</th>
          </tr>
          <tr>
          <td>{ data?.name}</td>
          <td>{((data.main.temp))}°C</td>
          <td> {data.main.humidity}  </td>
          <td>{data.main.temp_min}°C</td>
          <td>{data.main.temp_max}</td>
          </tr>
          </>  
                  
          </div>
        
      }
      
       
      
          
      </div>
</div>
    </div>
  );
}

export default App;