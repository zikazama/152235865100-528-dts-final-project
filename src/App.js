import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
