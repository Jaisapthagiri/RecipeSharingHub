import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Header from './main/Header'
import Recipes from './components/Recipes'
import RecipeHeader from './components/RecipeHeader'
import Description from './components/Description'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: "50px" }}></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/header' element={<Header />} />
        <Route path='/recipesHeader' element={<RecipeHeader />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </div>
  )
}

export default App
