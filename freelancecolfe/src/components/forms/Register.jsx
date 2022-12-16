import React, {useState, useEffect} from "react";
import { Login } from "./Login";


export const Register = () => {

const [registros, setRegistros] = useState([]);

const [nombreyapellido, setNombreyapellido]= useState("");
const [edad, setEdad] = useState ("");
const [correo, setCorreo] = useState("");
const [profesion, setProfesion] = useState("");
const [ciudad, setCiudad] = useState("");
const [profesional, setProfesional] = useState("");
const [buscoServicio, setBuscoServicio] = useState("");

const botonGuardar = (e) => {
    e.preventDefault();
    var myObject = {nombreyapellido, edad, correo, profesion, ciudad, profesional, buscoServicio}
    setRegistros([...registros, myObject]);
    limpiarFormulario();
}

useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros))
}, )

const limpiarFormulario =() => {
    setNombreyapellido("");
    setEdad("");
    setCorreo("");
    setProfesion("");
    setCiudad("");
    setProfesional("");
    setBuscoServicio("");
    document.getElementById("registro").reset();
}

    return (

        <form id="registro" onSubmit={ botonGuardar}> 
        
        <div>
                
        <h2>Ingrese sus datos</h2>
        <input placeholder='Nombres y Apellidos' onChange={(e)=> setNombreyapellido(e.target.value)} required/>
        <input placeholder='edad'onChange={(e)=> setEdad(e.target.value)} required/>
        <input placeholder='correo' onChange={(e)=> setCorreo(e.target.value)} required/>
        <input placeholder='profesion'onChange={(e)=> setProfesion(e.target.value)} required/>
        <input placeholder='ciudad'onChange={(e)=> setCiudad(e.target.value)} required/>


        <input placeholder='Profesional' onChange={(e)=> setProfesional(e.target.value)} required/>
        <input placeholder='Busco Servicios' onChange={(e)=> setBuscoServicio(e.target.value)} required/>
        
        <button>Crear Cuenta</button>
        <button>Ingresar</button>
        
        
    </div></form>
       
            )
}
export default Register;