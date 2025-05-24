import React, { useEffect, useState } from 'react'
import Recipes from './Recipes'

const RecipeHeader = () => {

  let [recipes, setRecipes] = useState([])
  let [selectedCuisine,setSelectedCuisine] = useState('')
  let [cuisines,setCusines] = useState([])

  useEffect(()=>{

    fetch('http://localhost:5000/recipes')
    .then(res => res.json())
    .then(data => {
      setRecipes(data)

      let unique = [...new Set(data.map(val => val.cuisine))]
      setCusines(unique)
    })
    .catch(err => console.log("Msg :",err))
  },[])

  return (

    <div >
      <div style={{padding:"0px 5px 30px 5px"}}>
          <div style={{width:"100%",backgroundColor:"Orange",height:"300px",padding:"10px"}}>
            <div style={{width:"300px",height:"200px",marginLeft:"550px",marginTop:"60px"}}>
                <h2 style={{textAlign:"center",}}>Category</h2>
              <div style={{ fontSize: "20px",marginLeft:"70px",marginTop:"10px"}}>
                <label>
                  <input type="radio" name="food" value="veg" />
                  Veg
                </label>
                <label style={{ marginLeft: "20px" }}>
                  <input type="radio" name="food" value="nonveg" />
                  Non-Veg
                </label>
              </div>

              <div>
              <select 
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                style={{ padding: "10px", borderRadius: "8px", fontSize: "16px",marginTop:"20px",width:"90%",marginLeft:"16px"}}
              >

              <option value="">--Select Cuisine--</option>
                {cuisines.map((cuisine, index) => (
                <option key={index} value={cuisine}>
                {cuisine}
                </option>
              ))}
              </select>

              </div>
                <center>
                  <button style={{marginTop:"10px"}}>Apply</button>
                </center>
              </div>

          </div>
          <Recipes />
      </div>

    </div>
    
  )
}

export default RecipeHeader;