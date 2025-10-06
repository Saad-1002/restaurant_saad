import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <title>Sweet restaurant</title>
      <nav>
        <a href = 'home'> Home </a>
        <a href = 'about'> About </a>
        <a href = 'menu'> Menu </a>
        <a href = 'contact'> Contact</a>

      </nav>
      <h1> Welcome to sweet restaurant where every kind of veg and non-veg dishes are available.</h1>

      <p> 
        Chicken Biriyani: A flavorful rice dish made with basmati rice.
        Egg Curry: Hard-boiled eggs with gracy.
        Paneer Butter Masala: Paneer cheese with gravy.
      </p>
      <footer>
        <p>
          Contact us: 123-456-7890
          Email: Sweetrestaurant123@email.com
        </p>
      </footer>
    </>
  )
}

export default App
