import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import Scheduling from '../../pages/Scheduling/Scheduling';
import "../../components/ProSideBar/ProSideBar.css"


export default function SideBar({user, setUser}) {
  const { collapseSidebar } = useProSidebar();
  function handleLogOut(){
    //Delegate to the user service
    userService.logOut()
    //Update state will also cause a re render
    setUser(null)
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar className='sidebar'>
  <Menu>
    <MenuItem> <div onClick={() => collapseSidebar()}>Hey, {user.name}</div> </MenuItem>
    <SubMenu label="Media">
      <MenuItem component={<Link to="/videos"/>}> Videos </MenuItem>
      <MenuItem component={<Link to="/compvideos"/>}> Comp Videos </MenuItem>
    </SubMenu>
    <MenuItem component={<Link to="/FAQ"/>}> FAQ </MenuItem>
    <MenuItem component={<Link to="/Seminar"/>}> Seminar Dates </MenuItem>
    <MenuItem component={<Link to="/Shop"/>}> Shop </MenuItem>
    <MenuItem component={<Link to="/Contact"/>}> Contact </MenuItem>
    <MenuItem component={<Link to="/scheduling"></Link>}> Scheduling</MenuItem>
    <MenuItem component={<Link to="" onClick={handleLogOut}></Link>}> Log out</MenuItem>
  </Menu>
</Sidebar>

</div>
  );
}