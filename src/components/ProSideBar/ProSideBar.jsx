import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'


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
    <Sidebar>
  <Menu>
    <MenuItem> <div onClick={() => collapseSidebar()}>DBic Jiu Jitsu</div> </MenuItem>
    <SubMenu label="Media">
      <MenuItem component={<Link to="/videos"/>}> Videos </MenuItem>
      <MenuItem component={<Link to="/compvideos"/>}> Comp Videos </MenuItem>
    </SubMenu>
    <MenuItem> FAQ </MenuItem>
    <MenuItem> Seminar Dates </MenuItem>
    <MenuItem> Shop </MenuItem>
    <MenuItem> Contact </MenuItem>
    <MenuItem component={<Link to="" onClick={handleLogOut}></Link>}> Log out</MenuItem>
  </Menu>
</Sidebar>

</div>
  );
}