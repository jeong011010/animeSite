import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./router/Home"
import Login from "./router/Login"
import Detail from "./router/Detail"
import "./styles.css";
import ScrollTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/anime/:id">
          <Detail />
        </Route>
        <Route path="/auth">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
