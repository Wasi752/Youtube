import './App.css';
import LeftSideBar from './LeftSideBar';
import Content from './Content';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header';
import Youtube1st from './Youtube1st';
import Youtube2nd from './Youtube2nd';
import Youtube5th from './Youtube5th';
import Youtube3rd from './Youtube3rd';
import Youtube4th from './Youtube4th';



function App() {
  return (
    <div className="App h-full w-full ">
        <Header/>
        <Routes>
          <Route path="1st" element={<Youtube1st/>} />
          <Route path="2nd" element={<Youtube2nd/>} />
          <Route path="3rd" element={<Youtube3rd/>} />
          <Route path="4th" element={<Youtube4th/>} />
          <Route path="5th" element={<Youtube5th/>} />
        </Routes>
            
    </div>
  )
};

export default App;
