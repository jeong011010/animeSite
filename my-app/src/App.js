import {
  HashRouter as Router,
  Route,
  Routes
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
      <Routes>
        <Route path="/anime/:id" element={<Detail />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
