import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Clock from '../components/Clock'

const TimeZones = (props) => {

  const [data, setData] = useState()

  useEffect(()=>{
    const getData = JSON.parse(localStorage.getItem('myTimezones'))
    setData(getData)
  },[])

  const removeTimezone = (timezone) => {
    props.setTimezones(props.timezones.filter((tz,index) => {
      return timezone.value !== tz.value
    }))
  }


  const clock = props.timezones?.map((tz,index) => {
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
