import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [tour, setTour] = useState([])

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

  return <main>
    <Tours tour={tour} />
  </main>
}

export default App
