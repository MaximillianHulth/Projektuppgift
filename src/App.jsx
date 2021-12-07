import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Routing from './components/Routing';
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";



function App() {
  return (
    <div className="wrapper">
      <Router>
      <Header />
      <Routing />
      <Footer />
      </Router>
    </div>
  );
}

export default App;