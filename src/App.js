import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import ProtectedComponent from "./components/ProtectedComponent";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Kita akan gunakan di sini dan nge-slot App */}
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <Home />
            </ProtectedComponent>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
