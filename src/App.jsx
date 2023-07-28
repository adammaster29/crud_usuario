
import {  useEffect, useState } from 'react'
import './App.css'
import './Responsive.css'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'



function App() {

  const users = [
    {id:12,name:"Adam",last_name:"Agudelo",age:29,email:"adam@gmail.com",movil:3124564578},
    {id:13,name:"Luna",last_name:"Perez",age:26,email:"luna@gmail.com",movil:3144564578},
    {id:14,name:"Rosa",last_name:"Blanco",age:20,email:"rosa@gmail.com",movil:3224564578},
    {id:52,name:"Ana",last_name:"Ramirez",age:27,email:"ana@gmail.com",movil:3014564578},
    {id:16,name:"Camila",last_name:"martinez",age:14,email:"camila@gmail.com",movil:3124564578}
   
  ]

const[usuarios,setUsuarios] = useState()
const[usuarioSeleccionado,setUsuarioSeleccionado] = useState(null)


useEffect(()=>{
  setUsuarios(users)
},[])

//modal
const [modal, setModal] = useState(false)

const abrirModal = () => {
    setModal(true)
}



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









  return (
  
      <div className={`App ${dark ? "dark" : ""}`}>
         <HashRouter>
      <Routes>
        <Route path="/" element={ <Home dark={dark} setModal={setModal} modal={modal} abrirModal={abrirModal} oscuro={oscuro} actualizar={actualizar} usuarioSeleccionado={usuarioSeleccionado} seleccionar={seleccionar} eliminar={eliminar} agregar={agregar} usuarios={usuarios}/>} />
     </Routes>
    </HashRouter>
         </div>
     
    
  )
}

export default App
 