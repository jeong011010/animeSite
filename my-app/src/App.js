import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
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
        <Route path="/animeSite/anime/:id">
          <Detail />
        </Route>
        <Route path="/animeSite/auth">
          <Login />
        </Route>
        <Route path="/animeSite">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
