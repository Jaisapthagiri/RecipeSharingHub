import React from 'react'
import homeimage from '../assets/Home.jpg'
import Header from '../main/Header'
import MiniFeilds from '../components/MiniFeilds'
import MiniCard from '../components/MiniCard'
import Footer from '../main/Footer'


const Home = () => {
  return (
    <>
    <div className='content'>
      <div >
        <img src={homeimage} alt="This is image"
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          display: 'block',
        }}/>

        <div style={{
        position: 'absolute',
        top: "100px",
        left: "50px",
        width: '100%',
        }}>
        <Header />
        <MiniFeilds />
        </div>

        <div className='recipes' style={{marginTop:"60px"}}>
        <MiniCard/>
        </div>
      </div>
    </div>
    < Footer/>
   </>
  )
}

export default Home