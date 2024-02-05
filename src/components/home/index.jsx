import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Cards from '../weather card';
import { TextField } from '@mui/material';
import About from '../nav';


let Home = () => {

  const [cityName, setCityName] = useState("")

  const [data, setData] = useState([])



  let submitHandler = async (e) => {

    e.preventDefault();

    console.log("i am a submilHandler function");

    try {

      let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=9ba76eb069452b878f0b87378334462f&units=metric`)

      console.log("response", response)

      setData(response.data.list)
  

    }
    catch (error) {
      console.log("api error", error);
    }

  }


  return (
  

    <div>
  
<About />

      <br />

      <form onSubmit={submitHandler}>

        <Form.Group>

          <TextField id="outlined-basic" label="Enter Your City Name" variant="outlined" fullWidth onChange={(e) => { setCityName(e.target.value); }} />
          <br />
          <br />
          <Button variant="success" type='submit' style={{ width:'100%'}}>Get Weather</Button>
        </Form.Group>
      </form>

      {


        data.map((eachForcast, index) => (

          <Cards
            key={index}
            date={eachForcast.dt_txt}
            temp={eachForcast.main.temp}
            min={eachForcast.main.temp_min}
            max={eachForcast.main.temp_max}
            
          />

        ))
      }
    </div>

  );
}

export default Home;