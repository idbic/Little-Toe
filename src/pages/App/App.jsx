
import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../Comp Videos/CompVideos';
import OrderHistoryPage from '../Videos/Videos'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import Sidebar from '../../components/ProSideBar/ProSideBar'
import CompVid from '../Comp Videos/CompVideos';
import Videos from '../Videos/Videos';


export default function App() {
  const [user, setUser] = useState(getUser())
  
  return (
    <main className="App">
      { user ?
        <>
          
          <Sidebar></Sidebar>
          <NavBar user={user} setUser={setUser}/>
          
          <Routes>
            <Route path="/compvideos" element={<CompVid />} />
            <Route path="/videos" element={<Videos />} />
            
            
          </Routes>
          
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );


    }