import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Clock from '../components/Clock'

const TimeZones = (props) => {

  const [data, setData] = useState()

  // console.log('TimeZones.JS RENDERING')

  const fetchStorage = () =>  {
    const getData = JSON.parse(localStorage.getItem('myTimezones'))

    // Fix Re-rendering with a check if the array is empty
    if (getData.length === 0) return
    setData(getData)
  }

  useEffect(()=>{
    fetchStorage()
  },[data])

  const removeTimezone = (timezone) => {
    props.setTimezones(data.filter((tz,index) => {
      const myData = JSON.parse(localStorage.getItem("myTimezones"));
      myData.splice(0,1);
      setData(localStorage.setItem("myTimezones",JSON.stringify(myData)));
      fetchStorage()
      return timezone.value !== tz.value
    }))
    
  }

  const clock = data?.map((tz,index) => {
    return (
      <>
      <h2 key={index}>{tz.value}</h2>
      <Clock  timezone={tz} />
      <button onClick={()=>removeTimezone(tz)}>Remove</button>
    </>
    )
  })
  

  return (
    <div>
      <h1>My Timezones</h1>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      {clock}
    </div>
  )
}

export default TimeZones
