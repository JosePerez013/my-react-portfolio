import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/casa/Home";
import Socials from "./components/Socials/Socials";

function App() {

   return <div>
    <Navbar /> 
    <Home />
    
    <Socials />
   </div>;
}

export default App;
