import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Activities from "./routes/Activities";
import Awards from "./routes/Awards";
import Photo from "./routes/Photo";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Activities" element={<Activities/>}/>
        <Route path="/Awards" element={<Awards/>}/>
        <Route path="/Photo" element={<Photo/>}/>
      </Routes>
    </div>
  );
}
