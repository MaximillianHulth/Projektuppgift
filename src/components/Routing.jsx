import { Routes, Route } from "react-router-dom";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";


function Routing () {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route path="/about" element={<About />}> </Route>
            <Route path="/portfolio" element={<Portfolio />}> </Route>
            <Route path="/testimonials" element={<Testimonials />}> </Route>
            <Route path="/contact" element={<Contact />}> </Route>
        </Routes>
    );
}

export default Routing;