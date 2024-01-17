import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {FirebaseContext, authContext} from './store/FirebaseContext'
/**
 * ? ===== Import Components =====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'


function App() {

  const {user,setUser} = useContext(authContext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[])
  return (
    <div>
      <Router>
          <Route exact path="/"><Home/></Route>
          <Route path="/sign-up"><Signup/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/create"><Create/></Route>
      </Router>
    </div>
  );
}

export default App;