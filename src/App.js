import './App.css';
import LeftSideBar from './LeftSideBar';
import Content from './Content';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Youtube1st from './Youtube1st';
import Youtube2nd from './Youtube2nd';




function App() {
  return (
    <div className="App h-full w-full ">
        <Header/>
        <Routes>
          <Route path="1st" element={<Youtube1st/>} />
          <Route path="/:image" element={<Youtube2nd/>} />
          
        </Routes>
            
    </div>
  )
};

export default App;
