import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [tour, setTour] = useState([])

  const removeTour = (id) =>{
    const newTour = tour.filter((tor)=>tor.id !== id);
    setTour(newTour)
  }

  const FetchTours = async () => {
    setLoading(true)
    try {
      const data = await fetch(url);
      const resp = await data.json();
      setLoading(false);
      setTour(resp)

    } catch (error) {
      setLoading(false)
      console.log(error);
    }


  }

  useEffect(() => {
    FetchTours();
  }, [])


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tour.length === 0){
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button onClick={FetchTours} className='btn'>refresh</button>
      </div>
    </main>
  }

  return <main>
    <Tours tour={tour} removeTour={removeTour} />
  </main>
}

export default App
