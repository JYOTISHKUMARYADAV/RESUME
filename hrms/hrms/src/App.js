import React from "react";
import Loginpage from "./component/login/login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signuppage from "./component/login/signup/signup";
function App(){
  return(

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/signup" element={ <Signuppage/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  )

}
export default App;