import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/login";

const Mycontext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  const [isLogin, setIsLogin] =useState(false);
  const [isHideSidebar, setIsHideSidebar] =useState(false);


  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebar,
    setIsHideSidebar
  }

  return (
    <BrowserRouter>
      <Mycontext.Provider value={values}>
        {
          isHideSidebar!==true &&
          <Header />}
        <div className="main d-flex">

        {
          isHideSidebar!==true &&
          <div className={`sidebarwrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Sidebar />
          </div>

        }
         
          <div className={`content ${isHideSidebar===true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/Dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />

            </Routes>
          </div>
        </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { Mycontext };
