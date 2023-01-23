import * as usersService from '../../utilities/users-service'

export default function Videos() {
    async function handleCheckToken(){
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }
    
    return (
      <>
        <h1>Jiu Jitsu Instructionals</h1>
        <button onClick={handleCheckToken}>console log date and time</button>
        </>
    );
  }