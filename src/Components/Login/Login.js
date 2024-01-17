import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const {firebase}=useContext(FirebaseContext)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const history = useHistory()
  const loginHandle = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      alert("logged in")
    }).then(()=>{
      history.push("/")
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={loginHandle} >
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
