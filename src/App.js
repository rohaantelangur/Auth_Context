import './App.css';
import Form from './component/Form';
import Navbar from './component/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Profile } from './component/Profile';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
      <Route path="/" element={<Form />}/>
      <Route path="/profile" element={<Profile />}/>
      </Routes>
      
    </div>
  );
}

export default App;
