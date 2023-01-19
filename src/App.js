import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Post from './Components/Posts/Post';
import Profile from './Components/Profile/Profile';
import Reels from './Components/Reels/Reels';
import Sidebar from './Components/Sidebar/Sidebar';
import Taged from './Components/Taged/Taged';

function App() {
  return (
    <div className="App">
        <Sidebar/>
       <div> <Profile/>
       <hr />
       <Navbar/>
      <Routes>
      <Route  path='/' element={<Post/>}/>
      <Route  path='/posts' element={<Post/>}/>
      <Route  path='/reels' element={<Reels/>}/>
      <Route  path='/taged' element={<Taged/>}/>
      </Routes>
      <Outlet/>
       </div>
    </div>
  );
}

export default App;
