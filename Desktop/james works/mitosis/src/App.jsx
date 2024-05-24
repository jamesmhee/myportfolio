import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [point, setPoint] = useState(null)

  async function getData(){
    try{
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.expedition.mitosis.org/v1/status/0xeaB04d748c5453CF9d43195aB77F453A6268ec36", {
        method: 'GET',        
      })
      if(response.ok){
        let json = await response.json()
        setPoint(json)
        console.log("Fetched data:", json)
      }
    }catch(err){
      setTimeout(()=>{
        window.location.reload()
      }, 60000)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  if (!point) {
    return <div>Loading...</div>
  }

  return (
    <div className='bg-zinc-900 text-bold flex p-4 text-white w-screen h-screen'>
      <div className='border rounded-xl p-4 m-2 flex flex-col justify-center items-center'>        
        <h3>MitoPoints</h3>
        <div className=''>

        </div>
        <p>Total: {parseFloat(point.mitoPoints.total).toFixed(2)}</p>
        <p>Today: {parseFloat(point.mitoPoints.today)}</p>
        <p>Base Points: {point.mitoPoints.basePoints}</p>
        <p>Daily Points: {point.mitoPoints.dailyPoints}</p>
        <p>Boost: {point.mitoPoints.boost}</p>
        <p>Bracket Boost: {point.mitoPoints.bracketBoost}</p>
        <p>Bracket Amount: {point.mitoPoints.bracketAmount}</p>
        <p>Holding Duration Boost: {point.mitoPoints.holdingDurationBoost}</p>
        <p>Holding Duration: {point.mitoPoints.holdingDuration}</p>
        
        <h3>External Points</h3>
        <p>Eigenlayer: {point.externalPoints.eigenlayer}</p>
        <p>Etherfi: {point.externalPoints.etherfi}</p>
                        
        <h3>Tier</h3>
        <p>Tier: {point.tier.tier}</p>
        <p>Points: {point.tier.points}</p>
        <p>Next Tier Points: {point.tier.nextTierPoints}</p>
        
        
      </div>
    </div>
  )
}

export default App
