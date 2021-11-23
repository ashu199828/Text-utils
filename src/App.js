// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";



function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#286eb6'
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled','success');
    }
  }
  return (
    <>
    <Router>
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          <Route exact path="/About">
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>
          </Route>
        </Switch>
   <About mode={mode} toggleMode={toggleMode}/>
   
   </div>  
   </Router>                     
    </>
  );
}

export default App;
