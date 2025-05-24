import React from 'react'
import { FaFacebook ,FaInstagram} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
      <div className='foot-1'>
        <div className='footMain' style={ {display:"flex",color:"white",fontFamily:"sans-serif"}}>

          <div >
          <ol className='lists' >
            <p className='topics' >About</p>
            <div className='ele' >
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Our Products</li>
            </div>
          </ol>
          </div>
          
          <div >
            <ol className='lists' >
              <p className="topics" >Fitness</p>
                <div className='ele' >
                  <li>Healthy Diet</li>
                  <li>Physical Fitness</li>
                  <li>Natural Foods</li>
                  <li>Aroma Dishes</li>
                </div>
            </ol>
          </div>

          <div >
            <ol className='lists' >
              <p className="topics" >Fitness</p>
                <div className='ele' >
                  <li>Healthy Diet</li>
                  <li>Physical Fitness</li>
                  <li>Natural Foods</li>
                  <li>Aroma Dishes</li>
                </div>
            </ol>
          </div>

          <div style={{
            borderLeft: "1px solid white",
            height: "165px",
            marginLeft:"100px",
            marginTop:"20px"
            }}>
        </div>

        <div className='Social'>
            <div className='Mail'>
              <p className='topics'>Social :</p>
              <ol className='lists' >
                <div className='ele1' style={ {display:"flex",fontSize:"30px",gap:"20px",marginLeft:"50px",marginTop:"20px"} }>
                <FaInstagram color="#E1306C"/>
                <SiGmail />
                <FaFacebook color="blue"/>
                <FaXTwitter />
                </div>
              </ol>
                
            </div>
        </div>
        </div>
      </div>
  
  )
}

export default Footer;