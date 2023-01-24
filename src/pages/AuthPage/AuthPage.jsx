import LoginForm from "../../components/NavBar/LoginForm/LoginForm"
import SignUpForm from "../../components/NavBar/SignUpForm/SignUpForm";


export default function AuthPage({setUser}) {
    
    
    return (
        <main>
        <h1>DBicJiuJitsu.com</h1>
        
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser}/>
        </main>
    );
  }