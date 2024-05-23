import './App.css';
import { Routes, Route} from "react-router-dom";
import Documents from "./routes/Documents";
import Home from "./routes/Home";
import Credits from "./routes/Credits";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/credits" element={<Credits/>}/>
      </Routes>
    </>
  );
}

export default App;
