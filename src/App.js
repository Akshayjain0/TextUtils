// import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from "react"
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }
  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enbled", 'success')
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enbled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title={'TextUtils'} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        < div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About mode={mode} />}></Route >

            <Route path="/" element={<TextForm heading={"Try TextUtils - Word Counter, Character Counter, Remove extra spaces"} mode={mode} showAlert={showAlert} />}></Route>

          </Routes>

        </div>
      </Router >

    </>
  );
}

export default App;
