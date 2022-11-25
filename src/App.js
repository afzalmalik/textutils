import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(24 18 34)';
      showAlert("Dark Mode has been enabled!", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been disabled!", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  const toggleRedMode = () => {
    // console.log("first: ", mode);
    if (mode === 'light') {
      setMode('danger');
      document.body.style.backgroundColor = 'rgb(255 85 101)';
      showAlert("Red Mode has been enabled!", "danger");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Red Mode has been disabled!", "danger");
    }
    // console.log("after: ", mode);
  }

  const toggleYellowMode = () => {
    // console.log("first: ", mode);
    if (mode === 'light') {
      setMode('warning');
      document.body.style.backgroundColor = 'rgb(255 211 82)';
      showAlert("Yellow Mode has been enabled!", "warning");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Yellow Mode has been disabled!", "warning");
    }
    // console.log("after: ", mode);
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} toggleYellowMode={toggleYellowMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
