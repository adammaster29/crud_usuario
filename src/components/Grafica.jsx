import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Grafica extends Component {
  componentDidMount() {
    const canvas = this.canvasRef;
    const ctx = canvas.getContext('2d');

    const barWidth = 50;
    const barHeightRatio = 4;

    let x = 50;
    let y = canvas.height - 50;

    ctx.fillStyle = 'rgb(255, 0, 212)';
    ctx.font = '12px Arial';

    for (let i = 0; i < this.props.usuarios?.length; i++) {
      const user = this.props.usuarios[i];
      const barHeight = user.age * barHeightRatio;

      ctx.fillRect(x, y - barHeight, barWidth, barHeight);
      ctx.fillText(user.name, x, y + 15);

      x += barWidth + 20;
    }
  }

  render() {
    const totalUsers = this.props.usuarios?.length;
    const usersmayores = this.props.usuarios?.filter(user => user.age > 18);
    const usersmenores = this.props.usuarios?.filter(user => user.age < 18);
    const percentageUsersOver25 = ((usersmayores?.length / totalUsers) * 100).toFixed(2);
    const percentageUsersmenores = ((usersmenores?.length / totalUsers) * 100).toFixed(2);
    
 
    
    return (

      <div className="padre-canva">

<div className="hijo navbar home-navbar">
            <nav>
              <ul>
                <li onClick={this.props.home} ><i className='bx bx-home'></i> <Link to='/' > <span className='notranslate'>Home</span> </Link>  </li>
                <li>  <i className='bx bx-user-plus '></i>  <span className='notranslate'>Add Users</span></li>
                <li><i class='bx bx-stats'></i>  <span className='notranslate'>Stats</span> </li>
                <li><i className='bx bx-moon'></i>  <span onClick={this.props.oscuro} className='notranslate'>Dark</span></li>
              </ul>
            </nav>

          </div>


        

        <div className="padre user-grafica">

        <div className="container-grafica stats">
          <div className='grafica uno'><span className='usuario'>Usuarios Ingresados</span> <span className='num-cuatro'><i className='bx bx-user-plus '></i>  {this.props.usuarios?.length}</span> </div>
          <div className='grafica dos'><span className='usuario'>Usuarios Mayores</span> <span className='num-cuatro'>{percentageUsersOver25} %</span> </div>
          <div className='grafica tres'><span className='usuario'>Usuarios Menores</span> <span className='num-cuatro'>{percentageUsersmenores} %</span> </div>

        </div>


          <div className="canva-grafica "> <canvas ref={(ref) => (this.canvasRef = ref)} width={600} height={400} />  </div>


        </div>

      </div>
    );
  }
}

export default Grafica;
