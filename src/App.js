import { Route, Switch } from "react-router";
import Homepage from "./containers/Homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path='/timezones' exact>
          timezones
        </Route>
      </Switch>
    </div>
  );
}

export default App;
