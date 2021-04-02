import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import Homepage from "./containers/Homepage";
import TimeZones from "./containers/TimeZones";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [timezones, setTimezones] = useLocalStorage('myTimezones', []);

  

  useEffect(()=>{
    localStorage.setItem('myTimezones', JSON.stringify(timezones))
  },[timezones])

  console.log('App.JS RENDERING')


  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Homepage setTimezones={setTimezones} timezones={timezones}/>
        </Route>
        <Route path='/timezones' exact>
          <TimeZones setTimezones={setTimezones} timezones={timezones} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
