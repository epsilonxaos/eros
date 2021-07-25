import React, {Component} from 'react';

import Maps from './Maps';

class HomeContacto extends Component {
    render(){
        return(
            <div className="home-contacto">
                <div className="container-fluid w12 text-center">
                    <h3 className="titulos text-white mb-5">Contactanos</h3>

                    <div className="row">
                        <div className="col-12 col-md-6 pr-md-4 text-center text-md-right">
                            <h4 className="text-white mb-4">Eros I - 999 156 7890</h4>
                        </div>
                        <div className="col-12 col-md-6 pl-md-4 text-center text-md-left">
                            <h4 className="text-white mb-4">Eros I - 999 372 8835</h4>
                        </div>
                        <div className="col-12 text-center">
                            <h4 className="text-white mb-4">erossuite@gmail.com</h4>
                        </div>
                    </div>

                    <Maps />
                </div>
            </div>
        )
    }
}

export default HomeContacto;