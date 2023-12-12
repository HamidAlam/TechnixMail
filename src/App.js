import "./App.css";
import Header from "./components/HeaderFiles/Header";
import Sidebar from "./components/SideBar/Sidebar";
import SupressionList from "./components/SupressionList/Supressionlist";
import Mailagent from "./components/Mailagent/Mailagent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

 function App() {
 
  return (
    <BrowserRouter>
      <div className="App">              
          <Header  />
            <Sidebar />
            <Routes>
            <Route path="SupressionList" element={<SupressionList  />} />        
            <Route path="Mailagent" element={<Mailagent />} />    
            </Routes>       
      </div>
    </BrowserRouter>
  );
}

export default App;
