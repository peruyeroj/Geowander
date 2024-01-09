import MapComp from './components/MapComp';
import LocationForm from './components/Location';

function App() {

  return (
    <>
    <div className = 'd-flex flex-column justify-content-center gap-4 align-items-center'>
      <h1>Random Location Generator</h1>
      <MapComp />
      <LocationForm />
    </div>
    </>
  )
}

export default App
