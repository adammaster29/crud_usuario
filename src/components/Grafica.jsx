import React from 'react';
import { useNavigate } from 'react-router-dom';

const Grafica = ({  oscuro, usuarios }) => {
  const totalUsers = usuarios?.length;
  const usersmayores = usuarios?.filter(user => user.age > 18);
  const usersmenores = usuarios?.filter(user => user.age < 18);
  const mayor = ((usersmayores?.length / totalUsers) * 100).toFixed(2);
  const menor = ((usersmenores?.length / totalUsers) * 100).toFixed(2);

  const navigate = useNavigate()
  const home = ()=>{
    navigate('/')
  }
  // promedio
  const edades = usuarios?.map(user => user.age);
  const suma = edades?.reduce((a, b) => a + b, 0);
  const promedio = suma / edades?.length;

  // grafica
  const porcentajeProgreso = (totalUsers / 100) * 100;

  return (
    <div className='padre-grafica'>
      <div className="menu">
        <img src="/public/img/logo.png" alt="" />
        <i onClick={home} class='bx bx-home-alt bx-icon-menu'></i>
        <i onClick={oscuro} class='bx bx-moon bx-icon-menu'></i>
      </div>
      <div className="contenedor-dasboard">
        <div className="dasboard uno">
          <span className='total-users'>
            <p className='notranslate texto user'>{totalUsers}</p>
            <p className='notranslate txt'>Usuarios</p>
          </span>
          <i class='bx bxs-user'></i>
        </div>

        <div className="dasboard tres">
          <div className="contenedor-mayor">
            <i class='bx bx-circle'></i>
            <span className='mayor-users'>
              <p className='texto notranslate'>{mayor}%</p>
              <p className='notranslate txt'>Usuarios Mayores</p>
            </span>
          </div>

          <div className="contenedor-menor">
            <i class='bx bx-circle b-menor'></i>
            <span className='menor-users'>
              <p className='texto notranslate menor-porcent'>{menor}%</p>
              <p className='notranslate txt'>Usuarios Menores</p>
            </span>
          </div>

          <div className="contenedor-promedio">
            <i class='bx bx-circle b-promedio'></i>
            <span className='promedio'>
              <p className='texto notranslate promedio-porcent'>
                {promedio.toFixed(2)}%
              </p>
              <p className='notranslate txt'>Promedio</p>
            </span>
          </div>
        </div>

        <div className="dasboard cuatro">
          {/* aqui va la grafica */}
          <div
            className='container-barra'
            style={{
              height: `${porcentajeProgreso}%`,
              backgroundColor: 'blue',
              width: '60px',
              margin: 'auto',
              color: 'white',
            }}
          >
            {`${porcentajeProgreso.toFixed(2)}%`}
          </div>
        </div>

        <div className="dasboard cinco">
          {usuarios?.map(persona => (
            <ul key={persona.id} className="wrap">
              <li className='notranslate'>Name: {persona.name}</li>
              <li className='notranslate'>Last-name: {persona.last_name}</li>
              <li className='notranslate'>Age: {persona.age}</li>
              <li className='notranslate'>Email: {persona.email}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grafica;
