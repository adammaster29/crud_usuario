
import {  useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Grafica from './components/Grafica'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {

  const users = [
    {id:1234568324320,name:"Adam",last_name:"Agudelo",age:29,email:"adam@gmail.com",movil:3124564578},
    {id:1234573245663,name:"Luna",last_name:"Perez",age:26,email:"luna@gmail.com",movil:3144564578},
    {id:1234545324834,name:"Rosa",last_name:"Blanco",age:20,email:"rosa@gmail.com",movil:3224564578},
    {id:1234595554356,name:"Ana",last_name:"Ramirez",age:27,email:"ana@gmail.com",movil:3014564578},
    {id:1234335435643,name:"Camila",last_name:"martinez",age:14,email:"camila@gmail.com",movil:3124564578},
    {id:1235334545728,name:"Andrea",last_name:"Perez",age:15,email:"andrea@gmail.com",movil:3144564578},
    {id:1234568324329,name:"luisa",last_name:"Agudelo",age:29,email:"adam@gmail.com",movil:3124564578},
    {id:1234573245661,name:"Luna",last_name:"Perez",age:26,email:"lun_ae@gmail.com",movil:3144564578},
    {id:1234545324830,name:"maria",last_name:"Blanco",age:20,email:"mai@gmail.com",movil:3224564578},
    {id:1234595554351,name:"laura",last_name:"Ramirez",age:27,email:"laura@gmail.com",movil:3014564578},
    {id:1234335435640,name:"Camila",last_name:"martinez",age:14,email:"camila23@gmail.com",movil:3124564578},
   
  ]

const[usuarios,setUsuarios] = useState()
const[usuarioSeleccionado,setUsuarioSeleccionado] = useState(null)


useEffect(()=>{
  setUsuarios(users)
},[])

//agregar 
const agregar = (data)=>{
  setUsuarios([...usuarios,data]);
}


//eliminar 


const eliminar = (id)=>{
const delet = usuarios.filter( user => user.id !== id )
 setUsuarios(delet);

}

const seleccionar = (user)=>{
  setUsuarioSeleccionado(user)
}

const actualizar = (editar)=>{
editar.id = usuarioSeleccionado.id;
const index = usuarios.findIndex(use => use.id === usuarioSeleccionado.id)
usuarios[index] = editar; 

setUsuarios([...usuarios]);

}

// modo oscuro
const[dark,setDark] = useState(false)

const oscuro = ()=>{

  setDark(!dark)
}

//home

const home = ()=>{
  navegacionHome('/')
}



console.log(usuarioSeleccionado);






  return (
  
      <div className={`App ${dark ? "dark" : ""}`}>
         <HashRouter>
      <Routes>
        <Route path="/" element={ <Home oscuro={oscuro} actualizar={actualizar} usuarioSeleccionado={usuarioSeleccionado} seleccionar={seleccionar} eliminar={eliminar} agregar={agregar} usuarios={usuarios}/>
    } />
        <Route path="/grafica" element={<Grafica home={home} oscuro={oscuro} usuarios={usuarios} />} />
      </Routes>
    </HashRouter>
         </div>
     
    
  )
}

export default App
 