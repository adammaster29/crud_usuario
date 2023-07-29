
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
    {id:13,name:"luisk",last_name:"Rangel",age:30,email:"luisk@gmail.com",movil:3144564578},
    {id:14,name:"Maria",last_name:"Blanco",age:26,email:"mai@gmail.com",movil:3224564578},
    {id:52,name:"Ronaldo",last_name:"Merlano",age:26,email:"merl@gmail.com",movil:3014564578},
    {id:16,name:"Karen",last_name:"Rangel",age:25,email:"karen@gmail.com",movil:3124564578},
    {id:17,name:"Andres",last_name:"Lopez",age:26,email:"lopez@gmail.com",movil:3122554578},
    {id:22,name:"Ado",last_name:"Ramirez",age:25,email:"ado@gmail.com",movil:3214564858},
    {id:19,name:"Andres",last_name:"Solorzano",age:27,email:"andres@gmail.com",movil:3124564578},
    {id:30,name:"camila",last_name:"perez",age:16,email:"cami@gmail.com",movil:3124564578}
   
   
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
 