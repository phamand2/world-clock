import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";
import Clock from "./Clock";
import styles from "./Form.module.css";

const Form = (props) => {
  const [timezone, setTimezone] = useState("");
  // console.log('Form.JS RENDERING')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTimezones([...props.timezones, timezone])
  };

  // const tzExists = props.timezones.find((tz)=>{
  //   return tz.value === timezone.value
  // })

  const tzExists = JSON.parse(localStorage.getItem('myTimezones')).find((tz)=>{
    return tz.value === timezone.value
  })


  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <TimezoneSelect
          className={styles.timezone}
          value={timezone}
          onChange={setTimezone}
        />
      </form>
      <form onSubmit={handleSubmit}>
        <button disabled={tzExists} className={styles.button} type="submit">Save</button>
      </form>
      <div className={styles.clock}>
        {timezone && <Clock timezone={timezone}/>}
      </div>
    </div>
  );
};

export default Form;
