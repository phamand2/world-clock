import React, { useState } from 'react'




const Form = () => {

  const [value, setValue] = useState(['us','uk','london'])
  const [country, setCountry] = useState('')

  const handleSubmit = (e) => {
    e.prevent.default()
    console.log('it work')
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setCountry(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name={value} id="">
          {value.map((timezone,index) => (
            <option onChange={(e) => handleChange(e)} key={index} value={timezone}>{timezone}</option>
          ))}
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
