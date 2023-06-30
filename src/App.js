import logo from './logo.svg';
import './App.css';
import A from './Componant/A';
import B from './Componant/B'
//import Profile from './ProfileComponant/profile';
import Login from './ContextProvider/Login';
import Home from './ContextProvider/Home';
import Header from './ContextProvider/Header';
import {useState} from 'react'

function App() {
  const [ isLogin , setIsLigIn] = useState(false)
  

  const login = () =>{

    setIsLigIn(true)
    


  }

  const logout = () =>{
    setIsLigIn(false)
  }

  return (
    <div className="App">
      <Header islogin={login} logout={logout}/>

      <A/>
     
{/*    
      {

        isLogin ? <Home/> : <Login login={login}/>
      }  */}

     

    </div>
  );
}

export default App;



