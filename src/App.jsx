
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadedcoffees = useLoaderData()
  const [coffees, setCoffees] = useState([])

  return (
    <div className='m-20'>
      <h1 className='text-5xl text-center '>Espresso Shop : {loadedcoffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-10 mt-20'>
        {
          loadedcoffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            >

          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
