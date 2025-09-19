import './App.css'
import { Suspense } from 'react'
import Countries from './components/countries/Countries'

function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

  return (
    <>
      
      <h1>Worldwide country</h1>

      <Suspense fallback={<p>Data is loading...</p>}>
          <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

    
    </>
  )
}

export default App
