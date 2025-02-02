import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar'
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
 
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Intra-TextUtils - Dark Mode';
    
    setInterval(() => {
      document.title = 'Intra-TextUtils is Amazing Mode';  
    }, 2000);
    setInterval(() => {
      document.title = 'Install Intra-TextUtils now';  
    }, 1500);
    
  }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Intra-TextUtils - Light Mode';
    }
}
  return (
    <>
    {/*  <Router> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" />  */}
      <Navbar title="Intra TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch>
          <Route path="/about">
            <About />
            </Route>
          <Route path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            {/* </Route>
          </Switch>   */}
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
         </Routes> */}
      {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

