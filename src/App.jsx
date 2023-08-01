import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/casa/Home";
import Socials from "./components/Socials/Socials";
import About from "./components/about/About";
import Projects from "./components/Work/Projects";
import Proficiencies from "./components/proficiencies/Proficiencies";
import Contact from "./components/contact/Contact";

function App() {

   return <div>
    <Navbar /> 
    <Home />
    <About />
    <Projects />
    <Proficiencies />
    <Contact />
    <Socials />
   </div>;
}

export default App;
