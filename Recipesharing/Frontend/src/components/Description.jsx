import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Noodels from '../assets/Noodels.jpeg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem } from '@mui/material';

const Description = () => {
  let {id} = useParams()

  let [recipe,setRecipe] = useState(null)

  useEffect( ()=> {
    fetch(`http://localhost:5000/recipes/${id}`)
    .then( (res) => res.json())
    .then(data => setRecipe(data))
    .catch(err => console.log("Error",err))
  },[id])

  if (!recipe) return <div>Loading...</div>;

    //   "description": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple, rich, and satisfying.",
    //   "ingredients": [
    //     "200g spaghetti",
    //     "100g pancetta",
    //     "2 large eggs",
    //     "50g Parmesan cheese",
    //     "Salt and black pepper to taste"
    //   ],
    //   "instructions": [
    //     "Boil the spaghetti in salted water until al dente.",
    //     "Fry the pancetta until crisp.",
    //     "Beat the eggs and mix with grated Parmesan.",
    //     "Drain pasta and quickly mix with pancetta and egg-cheese mixture.",
    //     "Serve with extra Parmesan and pepper."
    //   ],
    //   "category": "Dinner",
    //   "cuisine": "Italy",
    //   "image": "https://example.com/images/spaghetti-carbonara.jpg",
    //   "rating": {
    //     "rate": 4.8,`
    //     "count": 152
    //   }

  return (
    <div >
        <div>
            <h1 style={{width:"100%",color:"cyan",textAlign:"center",padding:"25px 0 30px 0"}}>{recipe.title}</h1>
        </div>
        <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={25}>

          <Grid style={{width:"50%",padding:"0 50px 20px 100px"}}>
            <div>
              <img
                src={Noodels}
                alt={recipe.title}
                style={{ width: '80%', height: 'auto', borderRadius: '8px' }}
              />
            </div>
            <p style={{marginTop:"30px",fontWeight:"bold",fontSize:"20px"}}>{recipe.description}</p>
          </Grid>

          <Grid >
            <div>
              <h2>Ingredients </h2>
              <ul >
                {recipe.ingredients.map((item,index) =>(
                  <li style={{fontSize:"20px", listStyle:"none",marginTop:"10px"}} key={index}>{item}</li>
                ))}
              </ul>
            </div>

          </Grid>

          </Grid>

        <Grid container spacing={0}>
          <Grid xs={12} md={4}>
            <div>size=4</div>
          </Grid>
          <Grid xs={12} md={8}>
            <div>size=8</div>
          </Grid>
        </Grid>
      </Box>
      </div>
  );
};

export default Description;