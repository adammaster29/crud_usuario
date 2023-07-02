import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Home = ({ setModal, modal, abrirModal, oscuro, usuarios, agregar, eliminar, seleccionar, actualizar, usuarioSeleccionado }) => {

  const { register, handleSubmit, reset, setValue } = useForm();

  const submit = (data, e) => {
    e.preventDefault();
    data.id = Date.now();

    if (usuarioSeleccionado !== null) {
      actualizar(data);
    } else {
      agregar(data);
    }
    reset();
  };

  useEffect(() => {
    if (usuarioSeleccionado !== null) {
      setValue("name", usuarioSeleccionado.name);
      setValue("last_name", usuarioSeleccionado.last_name);
      setValue("age", usuarioSeleccionado.age);
      setValue("email", usuarioSeleccionado.email);
      setValue("movil", usuarioSeleccionado.movil);
    }
  }, [usuarioSeleccionado, setValue]);

  useEffect(() => {
    if (!modal) {
      reset();
    }
  }, [modal, reset]);

  const navegacionHome = useNavigate();

  const home = () => {
    navegacionHome('/');
  };

  const navegacion = useNavigate();

  const navegar = () => {
    navegacion('/grafica');
  };

  const totalUsers = usuarios?.length;
  const usersmayores = usuarios?.filter(user => user.age > 18);
  const usersmenores = usuarios?.filter(user => user.age < 18);
  const percentageUsersOver25 = ((usersmayores?.length / totalUsers) * 100).toFixed(2);
  const percentageUsersmenores = ((usersmenores?.length / totalUsers) * 100).toFixed(2);

  return (
    <div className="contenedor-padre">
      <div className="hijo">
        <nav>
          <img src="img/logo.png" alt="" />
          <ul>
            <li onClick={home}>
              <i className="bx bx-home"></i>
              <span className="notranslate">Home</span>
            </li>
            <li>
              <i className="bx bx-user-plus"></i>
              <span onClick={abrirModal} className="notranslate">
                Add Users
              </span>
              {modal && (
                <div className="padre-modal">
                  <div className="hijo-modal">
                    <form onSubmit={handleSubmit(submit)}>
                      <label className="notranslate" htmlFor="name">
                        Nombre
                      </label>
                      <input type="text" id="name" {...register("name")} />

                      <label className="notranslate" htmlFor="last_name">
                        Apellidos
                      </label>
                      <input className="notranslate" type="text" id="last_name" {...register("last_name")} />

                      <label className="notranslate" htmlFor="age">
                        Edad
                      </label>
                      <input className="notranslate" type="number" id="age" {...register("age")} required />

                      <label className="notranslate" htmlFor="email">
                        Correo
                      </label>
                      <input className="notranslate" type="email" id="email" {...register("email")} />

                      <label className="notranslate" htmlFor="movil">
                        Movil
                      </label>
                      <input className="notranslate" type="number" id="movil" {...register("movil")} />

                      <div className="notranslate enviar-cerrar">
                        <input className="notranslate enviar" type="submit" value="Enviar" />
                        <input onClick={() => setModal(false)} className="cerrar notranslate" type="submit" value="Cerrar" />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </li>
            <li>
              <i className="bx bx-stats"></i>
              <span onClick={navegar} className="notranslate">
                Stats
              </span>
            </li>
            <li>
              <i className="bx bx-moon"></i>
              <span onClick={oscuro} className="notranslate">
                Dark
              </span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="padre">
        <div className="container-grafica">
          <div className="grafica uno-graf">
            <span className="usuario">Usuarios Ingresados</span>
            <span className="users">
              <i className="bx bx-user-plus"></i> {totalUsers}
            </span>
          </div>
          <div className="grafica dos-graf">
            <span className="usuario">Usuarios Mayores</span>
            <span className="users">{percentageUsersOver25} %</span>
          </div>
          <div className="grafica tres-graf">
            <span className="usuario">Usuarios Menores</span>
            <span className="users">{percentageUsersmenores} %</span>
          </div>
        </div>
        <div className="contenedor-tabla">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellìdo</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Movil</th>
                <th>Edición</th>
              </tr>
            </thead>
            <tbody>
              {usuarios?.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.age}</td>
                  <td className="correo">{user.email}</td>
                  <td>{user.movil}</td>
                  <td className="btn-colores">
                    <button className="eliminar" onClick={() => eliminar(user.id)}>
                      Eliminar
                    </button>
                    <button className="actualizar notranslate" onClick={() => { seleccionar(user); abrirModal(); }}>
                      Actualizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
