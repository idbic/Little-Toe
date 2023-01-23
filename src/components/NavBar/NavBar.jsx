// Don't forget the import
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'


export default function NavBar({user, setUser}) {
  //add the following function 
  function handleLogOut(){
    //Delegate to the user service
    userService.logOut()
    //Update state will also cause a re render
    setUser(null)
  }

  return (
    <nav>
      
      Welcome, {user.name}
      
      
    </nav>
  );
}