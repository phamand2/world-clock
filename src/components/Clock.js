import React, { useEffect, useState } from 'react'
import AnalogClock from 'analog-clock-react';

const Clock = (props) => {
  


  const [time, setTime] = useState({})

  // console.log('Clock.JS RENDERING')


  let options = {
    useCustomTime: true,
    width: "300px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#589a9a",
    centerColor: "#85e103",
    centerBorderColor: "#fff",
    handColors: {
      second: "#d81c1c",
      minute: "#2a594c",
      hour: "#040404"
    },
    "seconds": time.seconds,   
    "minutes": time.minutes,  
    "hours": time.hours 
};


useEffect(() => {
  const updateClock = () => {
    const timezoneTime = new Date().toLocaleString('en-US', {
      timeZone: props.timezone.value,
    });
    let date = new Date(timezoneTime)

    setTime({
      
        ...time,
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours()
      
    })
  };

  const interval = setInterval(() => {
    updateClock();
    // console.log('Updating clock at 60s')
  }, 1000);
  return () => {
    // console.log('Clear Interval')
    clearInterval(interval);
  };
}, [props.timezone.value, time]);


  return (
    <div>
      <AnalogClock useCustomTime {...options}  />
    </div>
  )
}


export default Clock
