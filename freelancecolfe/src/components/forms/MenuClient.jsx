import React, {useState} from 'react'
import { NavLink } from "react-router-dom"
import { ProfileClient} from "./ProfileClient"
import { SearchCompanies } from './SearchCompanies'
import { SearchProfessionals } from "./SearchProfessionals"
import { Lessons} from "./Lessons"

export const Menu = (props) => {

  const [busp, setBusp ] = useState("");
  const [busc, setBusc ] = useState("");
  const [cur, setCur ] = useState("");

  function logout(){
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
  }

 

  function buscarP(){
    setBusp("1");
    setBusc("0");
    setCur("0");
  }

  function buscarC(){
    setBusp("0");
    setBusc("1");
    setCur("0");

  }

  function cursos(){
    setBusp("0");
    setBusc("0");
    setCur("1");

  }

  return (
<>
        
    <div id="caja_menu" style={{textAlign:"left"}}>

    <strong className="h3">
      Bienvenido Usuario : { props.usu.toUpperCase() }
    </strong>
              
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop:20}}>
      <div className="container-fluid">

        <label className="navbar-brand  h5" href=" ">Menú Principal</label>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/SearchProgrammer" activeClassName="active" onClick={buscarP} >Buscar Programadores</NavLink>
            <NavLink to="/SearchCompany" activeClassName="active" onClick={buscarC} >Buscar Compañias</NavLink>
            <NavLink to="/Lessons" activeClassName="active" onClick={cursos} >Cursos</NavLink>
            <a className="nav-link  h5  text-center"  style={{color:"blue"}}  href=" " onClick= { logout } >Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  {busp === "1" && <SearchProfessionals/>}
  {busc === "1" && <SearchCompanies/>}
  {cur === "1" && <Lessons/>}

</>
  
  )
}


