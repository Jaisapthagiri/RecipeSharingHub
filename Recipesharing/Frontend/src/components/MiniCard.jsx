import chicken from '../assets/chicken.jpeg';
import paneer from '../assets/paneer.jpeg';
import rating45 from '../assets/rating45.png';
import rating40 from '../assets/rating40.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MiniCard = () => {
  return (
    <>
    <Container>
      <Row>
        <Col sm={6} >
          <img src={chicken}
          alt='This is recipe of 65'
          style={{width:"400px",height:"275px",marginLeft:"150px",borderRadius:"20px"}}
          />
        </Col>
        <Col sm={5} >
          <h2 className='nones'>Chicken 65</h2>
          <p className='paras'> 
            &emsp;&emsp;Chicken 65 is a fiery and flavorful dish that delivers a burst of spice with every bite. 
            The first taste hits with a sharp, tangy heat that lingers on the tongue, followed by the rich, deep flavor of marinated chicken.
            The aroma of fried curry leaves and subtle hints of garlic and chili make the experience even more mouthwatering. Eating Chicken 65 is not just about satisfying hunger—it's about enjoying a spicy, delicious thrill that leaves a lasting impression.<br />
            <img src={rating45} alt="Rating" style={{ height: '30px',marginLeft:"170px",marginTop:"20px" }} />
          </p>
        </Col>
      </Row>
    </Container>

    <Container style={{marginTop:"80px"}}>
      <Row>
        <Col sm={5} >
          <h2 className='nones'>Paneer Tikka</h2>
          <p className='paras'> 
            &emsp;&emsp;Paneer Tikka is a smoky, flavorful delight that offers a perfect balance of spice and creaminess in every bite. The first taste reveals the softness of marinated paneer, infused with yogurt, aromatic spices, and a hint of tanginess. As you chew, the charred edges bring in a subtle smokiness that enhances the overall flavor. Accompanied by grilled vegetables and a squeeze of lemon, the experience becomes even more refreshing. Eating Paneer Tikka is not just about taste grilled sensation that excites the senses and satisfies the soul.<br />
            <img src={rating40} alt="Rating" style={{ height: '30px',marginLeft:"150px",marginTop:"20px" }} />
          </p>
        </Col>

        <Col sm={6} >
          <img src={paneer}
          alt='This is Paneer Tikka'
          style={{width:"400px",height:"275px",marginLeft:"170px",borderRadius:"40px",objectFit:"contain"}}
          />
        </Col>
      </Row>
    </Container>
    </>    
  );
}

export default MiniCard;
