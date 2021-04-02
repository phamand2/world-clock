import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import styles from  './Homepage.module.css'

const Homepage = (props) => {

  // console.log('Homepage.JS RENDERING')

  return (
    <div className={styles.container}>
      <h1>World Clock</h1>
      <nav className={styles.navbar}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/timezones'>My Timezones</Link></li>
        </ul>
      </nav>
      <div>
        <Form {...props} />
      </div>
    </div>
  )
}

export default Homepage
