import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import paneer from '../assets/PaneerBurji.jpeg';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { MdDeleteOutline,MdEdit,MdOutlineInfo  } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Recipes = () => {

    let[recipes,setRecipes] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/recipes')
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch((err) => console.error('Error:',err))
        .finally(
            console.log('completed')
        )
    },[])

    let navigate = useNavigate()


  return (
    <>
        <div style={{display:"grid",gridTemplateColumns:'repeat(3, 400px)',gap:"40px",justifyContent:"center",marginTop:"40px"}}>
            {
                recipes.map(recipe => (
                <Card key={recipe.id} >
                <center>
                    <Card.Img
                    variant="top"
                    src={paneer}
                    style={{  height: "250px", objectFit: "contain",justifyContent:"center",padding:"2px",marginBottom:"2px"}}
                    />
                </center>
                <Card.Body>
                    <Card.Title style={{color:"blue",textAlign:"center"}}>{recipe.title}</Card.Title>
                    <center>
                        <Card.Text>{recipe.description}</Card.Text>
                    </center>

                    <div style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"20px"}}>
                        <Button variant="info" onClick={()=> navigate(`/description/${recipe.id}`)}><MdOutlineInfo /></Button>
                        <Button variant="primary"><MdEdit /></Button>
                        <Button variant="danger"><MdDeleteOutline /></Button>      
                    </div>
                </Card.Body>
                </Card>
                ))
            }
        </div>
        <div>
            <Fab style={{
                backgroundColor: "red",
                color: "white",
                position: "fixed",
                bottom: "20px",
                right: "20px",
            }} 
                aria-label="add">
                <AddIcon sx={{fontSize:"30px"}} />
                </Fab>
        </div>
    </> 
  )
  
}

export default Recipes;