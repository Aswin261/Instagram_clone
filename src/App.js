import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* {
          (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
          <Login/> : <Home/>
      } */}
      {/* <Login /> */}
      {/* <MainPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
