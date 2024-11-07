import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IngredientList from './components/IngredientList.jsx'
import BurgerStack from './components/BurgerStack.jsx'
//import BurgerStack from './components/BurgerStack.jsx'

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];


const App = () => {

  
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    setIngredients(availableIngredients)
  }, [availableIngredients])

  console.log(ingredients, "INGREDIENTS!!!")


  
  return (

    <main>
      <h1>Burger Stacker</h1>
      <section>
          <div> 
            <IngredientList
              ingredients={ingredients}
              />
            <BurgerStack ingredients={ingredients} />
          </div>        
      </section>
    </main>
  );
};


export default App
