
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
import Scheduling from '../Scheduling/Scheduling';
import FAQ from '../FAQ/FAQ';
import Seminar from '../Seminar/Seminar';
import Shop from '../Shop/Shop';


export default function App() {
  const [user, setUser] = useState(getUser())
  
  return (
    <main className="App">
      { user ?
        <div className='container'>
          
          <div className='sidebar'><Sidebar user={user} setUser={setUser}/></div>
          
          
          <div className='routes'><Routes>
            <Route className="compvids" path="/compvideos" element={<CompVid />} />
            <Route className="videos" path="/videos" element={<Videos />} />
            <Route className="scheduling" path="/scheduling" element={<Scheduling />} /> 
            <Route className="FAQ" path="/FAQ" element={<FAQ />} />
            <Route className="Seminar" path="/Seminar" element={<Seminar />} />
            <Route className="Shop" path="/Shop" element={<Shop />} />
                       
            
          </Routes>
          </div>
          
        </div>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );


    }