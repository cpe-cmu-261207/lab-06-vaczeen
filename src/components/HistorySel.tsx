import {useHistory} from 'react-router-dom'
import {useEffect,useState} from'react'
import axios from 'axios'
import HistoryRes from './HistoryRes'

const HistorySel= () => {
  let history=useHistory();
  const[start,setStart] = useState("")
  const[end,setEnd] = useState("")
  const clicked = (start:string,end:string) =>{
    let Start = new Date(start)
    let End = new Date(end)
    
    if(start === " "||end === " "||End<Start){
      alert("Please select start dare and end date correctly!!!")
    }
    else{
      history.push("result?start="+start+"&end="+ end);
      <HistoryRes></HistoryRes>
    }
  }
  return (
    <div className='text-center space-y-3 space-x-3'>
      <p className='text-2xl font-semibold'>Select historical range</p>
      <span>From date</span>
      <input type='date' onChange={e => console.log(e.target.value)}></input>
      <span>To date</span>
      <input type='date' onChange={e => console.log(e.target.value)}></input>
      <br />
      <button onClick={() => clicked(start,end)}>Get data</button>
    </div>

  )
}
export default HistorySel




