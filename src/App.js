import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
