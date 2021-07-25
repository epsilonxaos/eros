import React, {Component} from 'react';

import icon_go from '../../img/icons/icon-link.png';
import habitacion_bg_1 from '../../img/habitaciones-bg-1.jpg';
import habitacion_bg_2 from '../../img/habitaciones-bg-2.jpg';

class HomeHabitaciones extends Component {
    render(){
        return(
            <div className="home-habitaciones bg-black">
                <div className="container-fluid w12">
                    <h3 className="titulos text-center text-white mb-5">Conoce nuestras habitaciones</h3>
                    <div className="row">
                        <div className="col-12 col-md-6 bg bg-img-view py-4" style={{backgroundImage: `url(${habitacion_bg_1})`}}>
                            <div className="d-flex align-items-center justify-content-center align-items-md-end justify-content-md-start h-100">
                                <div className="wp text-center text-md-left">
                                    <h2 className="text-white neon red-neon mb-0">Eros I</h2>
                                    <h4 className="text-white mb-0">Entrar <img className="ml-2" src={icon_go} alt="Go" /></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 bg bg-img-view py-4" style={{backgroundImage: `url(${habitacion_bg_2})`}}>
                            <div className="d-flex align-items-center justify-content-center align-items-md-end justify-content-md-end h-100">
                                <div className="wp text-center text-md-right">
                                    <h2 className="text-white neon red-neon mb-0">Eros II</h2>
                                    <h4 className="text-white mb-0">Entrar <img className="ml-2" src={icon_go} alt="Go" /></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHabitaciones;