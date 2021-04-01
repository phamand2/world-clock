import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Homepage from "./containers/Homepage";
import TimeZones from "./containers/TimeZones";

function App() {
  const [timezones, setTimezones] = useState([]);

  useEffect(()=>{
    localStorage.setItem('myTimezones', JSON.stringify(timezones))
  },[timezones])

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
