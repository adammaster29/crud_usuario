import React, {useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';



const Home = ({ usuarios,agregar,eliminar,seleccionar,actualizar,usuarioSeleccionado }) => {

    const totalUsers = usuarios.length;
    const usersmayores = usuarios.filter(user => user.age > 18);
    const usersmenores = usuarios.filter(user => user.age < 18);
    const percentageUsersOver25 = ((usersmayores.length / totalUsers) * 100).toFixed(2);
    const percentageUsersmenores = ((usersmenores.length / totalUsers) * 100).toFixed(2);


    // modal
    const [modal, setModal] = useState(false)

    const abrirModal = () => {
        setModal(true)
    }
   
    // submit 
    const { register, handleSubmit, reset } = useForm();
    
    const submit = (data,e) => {
        e.preventDefault();
        data.id = Date.now();

        if (usuarioSeleccionado !== null) {
            actualizar(data)
          }
          else {
            agregar(data);
          };
          const clear = {name: "", last_name: "", age: "", email: "", movil: "" };
    reset(clear);
       
    }
    //grafica
    const navegacion = useNavigate()
    const navegar =()=>{
        navegacion('/grafica')
    }

    return (
        <div >
            <div className="container-grafica">
                <div className='grafica uno'><span className='usuario'>Usuarios Ingresados</span> <span className='num-cuatro'><i className='bx bx-user-plus '></i>  {usuarios.length}</span> </div>
                <div className='grafica dos'><span className='usuario'>Usuarios Mayores</span> <span className='num-cuatro'>{percentageUsersOver25} %</span> </div>
                <div className='grafica tres'><span className='usuario'>Usuarios Menores</span> <span className='num-cuatro'>{percentageUsersmenores} %</span> </div>

            </div>
            <div className='padre' >


                <div className="hijo navbar ">
                    <nav>
                        <ul>
                            <li><i className='bx bx-home'></i>  <span className='notranslate'>Home</span>  </li>
                            <li>  <i className='bx bx-user-plus '></i>  <span onClick={abrirModal} className='notranslate'>Add Users</span>
                                {modal && (
                                    <div className='padre-modal'>
                                        <div className='hijo-modal'>
                                            <form onSubmit={ handleSubmit(submit)}>
                                                <div className='form-input'>
                                                    <label className='notranslate' htmlFor='name'>Nombre</label>
                                                    <input type='text' id='name' {...register("name")} />
                                                </div>
                                                <div className='form-input'>
                                                    <label className='notranslate' htmlFor='last_name'>Apellidos</label>
                                                    <input type='text' id='last_name' {...register("last_name")} />
                                                </div>
                                                <div className='form-input'>
                                                    <label className='notranslate' htmlFor='age'>Edad</label>
                                                    <input type='number' id='age' {...register("age")} required />
                                                </div>
                                                <div className='form-input'>
                                                    <label className='notranslate' htmlFor='email'>Correo</label>
                                                    <input type='email' id='email' {...register("email")} />
                                                </div>
                                                <div className='form-input'>
                                                    <label className='notranslate' htmlFor='movil'>Movil</label>
                                                    <input type='number' id='movil' {...register("movil")} />
                                                </div>
                                               
                                                   <div className="notranslate enviar-cerrar"> 

                                                    <input className='notranslate enviar' type='submit'  value='Enviar' />
                                                    <input onClick={()=>setModal(false)} className='cerrar' type='submit'  value='cerrar' />
                                                    </div>
                                                
                                            </form>


                                        </div>
                                    </div>)

                                }

                            </li>
                            <li><i class='bx bx-stats'></i>  <span onClick={navegar} className='notranslate'>Stats</span> </li>
                            <li><i className='bx bx-moon'></i>  <span className='notranslate'>Dark</span></li>
                        </ul>
                    </nav>

                </div>


                <div className="hijo  usuarios">
                    <table>

                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellìdo</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th>Movil</th>
                            <th>Edición</th>
                        </tr>

                        {
                            usuarios.map(user => (

                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>{user.movil}</td>
                                    <td> <button onClick={()=>eliminar(user.id)}>Eliminar</button> 
                                     <button onClick={()=> {seleccionar(user);abrirModal()}}>Actualizar</button>   </td>
                                </tr>

                            ))}

                    </table>

                </div>
            </div>

        </div>
    );
};

export default Home;