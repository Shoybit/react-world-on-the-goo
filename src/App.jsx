import { Suspense } from 'react'
import './App.css'
import Countries from './component/countris/Countries'
function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
  return (
    <>
      <Suspense fallback={<p>Waiting</p>}>
            <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
