import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from './MenuClient'
import { Register} from "./Register"


export const Login = () => {

  const [miLogin, setMyLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");
  const [reg, setReg] = useState("false")


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("¡Completa los datos que faltan!")
    }else{
      if(usu === "admin" && pas==="123"){
        setMyLogin("true");
        document.getElementById("form_login").style.display = "none";
      }else{
        setMyLogin("false");
        alert("¡Error de Usuario y/o Contraseña!")
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();

      }
    }


  }


  return (
    <div className="container" style={{background:"lightgray", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>
            <h1 style={{color:"blue", textalign:"center"}}>LOGIN</h1>
            <label htmlFor="txtusu"><strong>Username</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control"  onChange={(e)=>setUsu(e.target.value)}  required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={(e)=>setPas(e.target.value)}  required/>
        </div><br/>
        <input type="submit"  className="btn btn-primary" value="Login" onClick={ iniciarSesion }/>
        <p></p>
        <Link to = "/crear-cuenta"><button type="submit"  className="btn btn-primary" value="Registrese" >Registrese</button></Link>
        
    </form>

      { miLogin === "true" && <Menu usu={usu}/>}
      { reg === "true" && <Register reg={reg}/>}

    </div>
  )
}
  

