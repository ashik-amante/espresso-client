
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {

  const coffees = useLoaderData()

  return (
    <div className='m-20'>
      <h1 className='text-5xl text-center '>Espresso Shop : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-10 mt-20'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
