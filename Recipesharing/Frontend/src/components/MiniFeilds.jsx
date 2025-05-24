import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bhel from '../assets/BhelPuri.jpeg';
import rice from '../assets/FriedRice.jpeg';
import noodels from '../assets/Noodels.jpeg';
import idly from '../assets/FriedIdly.jpeg';
import paneer from '../assets/PaneerBurji.jpeg';
import omblete from '../assets/omblete.jpeg';


const mealsDa = [
  {
    id: 1,
    title: 'Fried Rice',
    image :  rice,
  },
  {
    id: 2,
    title: 'Bhel Puri',
    image : bhel ,
  },
  {
    id: 3,
    title: 'Omblette',
    image : omblete ,
  },
  {
    id: 4,
    title: 'Noodels',
    image : noodels ,
  },
  {
    id: 5,
    title: 'Fried Idly',
    image : idly ,
  },
  {
    id: 6,
    title: 'Burji',
    image : paneer ,
  },
]

const MiniFeilds = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 300px)',marginTop:"80px",gap:"90px",marginLeft:"170px" }}>
      {
        mealsDa.map((item) => (
          <div style={{display:"flex"}}>
          <Container key={item.id} style={{ width:"300px",backgroundColor:"white",height:"150px",marginBottom:"15px",borderRadius:"10px"}}>
          <Row >
            <Col style={{backgroundColor:"white",height:"150px",color:"black",padding:"10px",borderRadius:"10px",textAlign:"center"}}>
              <h3 style={{textAlign:"center"}}>{item.title}</h3>
              serving : {Math.floor(Math.random() * (5 - 1 + 1)) + 1} <br />
              calories : {Math.floor(Math.random() * (20 - 10 + 1)) + 10} <br />
              time : {Math.floor(Math.random(1) * (50 - 15 + 15))} mins<br />
            </Col>
            <Col style={{padding: 0, height: "200px"}}>
            <img 
              src={item.image}
              style={{ width: "100%", height: "150px", objectFit: "cover",padding:"2px" ,borderRadius:"10px"}} 
            />
            </Col>
          </Row>
        </Container>
        </div>
        )) 
      }
      </div>
  )
}

export default MiniFeilds;
