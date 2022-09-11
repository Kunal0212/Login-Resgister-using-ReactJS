import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginReg from "./components/pages/Auth/LoginReg";
import Resetpassword from "./components/pages/Auth/Resetpassword";
import Sendpassemail from "./components/pages/Auth/Sendpassemail";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Dashboard from "./components/pages/Dashboard";


function App() {
  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="login" element={<LoginReg/>}/>
        <Route path="Sendpassemail" element={<Sendpassemail/>}/>
        <Route path="reset" element={<Resetpassword/>}/>
      </Route>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<h1>Error 404 Page not found!!</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
