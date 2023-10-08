
import './App.css'
import  Daisynav from './Components/Daisynav/Daisynav'
import Navber from './Components/Navber/Navber'
import PriceOptions from './Components/PriceOptions/Priceoptions'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'

function App() {
  
  return (
    <div className='mx-28'>   
      <Navber></Navber>
      <PriceOptions></PriceOptions>
      <Daisynav></Daisynav>
      <LineChart></LineChart> 
      <Phones></Phones>
      
    </div>
  )
}

export default App
