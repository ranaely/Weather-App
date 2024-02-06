import React from 'react';
import Card from 'react-bootstrap/Card';
import moment from "moment";









let Cards = ({ date, temp, min, max  }) => {

  return (

      <Card style={{ width: '40%', margin:'1%'}}
        border='success' 
      >
        
        <Card.Body >
          <Card.Title> {moment(date).format("dddd ha")}</Card.Title>

          
          <Card.Text> {temp}°C </Card.Text>
          <Card.Title>{min}°C to {max}°C</Card.Title>

          

        </Card.Body>
      </Card>
 

  );
}

export default Cards;
