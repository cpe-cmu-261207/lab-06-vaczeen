
import axios from 'axios'
import { useEffect, useState } from 'react'

type Bitcoin ={
  update:string;
  rate:string;
}
{/* template for /current */ }
const Currentprice = () => {

  const [CurrentTime, setCurrentTime] = useState<Bitcoin | null>(null);
  const [CurrentRate, setCurrentRate] = useState<Bitcoin | null>(null);
  const [loading, setLoading] = useState(true)
  const [error, setErr] = useState(false)

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/thb.json')
      .then(resp => {
        setCurrentRate(resp.data.bpi.THB.rate)
        setCurrentTime(resp.data.time.updated)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setErr(true)
      })
  }, [])

  const render = () => {
    if (loading)
      return (
        <div className='text-center-space-y-3'>
          <p className='text-2xl font-semibold'>Historical price</p>
          <p className='text-2xl'>Loading ...</p>
        </div>
      )
      else if(error)
      return(
        <div className='text-center space-y-3'>
          <p className='text-2xl font-semibold'>Historical price</p>
          <p className='text-2xl text-red-500'>There was an error. Please try again later.</p>
        </div>
      )
      else
      return(
        <div className='text-center space-y-3'> 
        <p className='text-2xl-font-semibold'>Current price</p>
        <p className='text-2xl'>{CurrentRate?.toLocaleString()}THB</p>
        <p>(Last updated{CurrentTime})</p>
        </div>
      )
  }
  return(
    render()
  )
}

export default Currentprice;