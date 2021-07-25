import React, {Component} from 'react';


import icon_go from '../../img/icons/icon-link.png';
import extras_bg_1 from '../../img/extras-bg-1.jpg';
import extras_bg_2 from '../../img/extras-bg-2.jpg';
import extras_bg_3 from '../../img/extras-bg-3.jpg';
import extras_bg_4 from '../../img/extras-bg-4.jpg';

class HomeExtras extends Component {
    render(){
        return (
            <div className="home-extras bg-black">
                <div className="container-fluid w12">
                    <h3 className="titulos text-center text-white mb-5">¿Qué se te antoja?</h3>
                    <div className="row">
                        <div className="col-12 col-md-6 bg bg-img-view py-4" style={{backgroundImage: `url(${extras_bg_1})`}}>
                            <div className="d-flex align-items-center justify-content-center align-items-md-end justify-content-md-start h-100">
                                <div className="wp text-center text-md-left">
                                    <h2 className="text-white neon purple-neon mb-0">Alimentos <img className="ml-2" src={icon_go} alt="Go" /></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 bg bg-img-view py-4" style={{backgroundImage: `url(${extras_bg_2})`}}>
                            <div className="d-flex align-items-center justify-content-center align-items-md-end justify-content-md-end h-100">
                                <div className="wp text-center text-md-right">
                                    <h2 className="text-white neon red-neon mb-0">Sexshop II <img className="ml-2" src={icon_go} alt="Go" /></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 bg bg-img-view py-4" style={{backgroundImage: `url(${extras_bg_3})`}}>
                            <div className="d-flex align-items-center justify-content-center align-items-md-end justify-content-md-start h-100">
                                <div className="wp text-center text-md-left">
                                    <h2 className="text-white neon yellow-neon mb-0">Promociones <img className="ml-2" src={icon_go} alt="Go" /></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 bg bg-img-view py-4" style={{backgroundImage: `url(${extras_bg_4})`}}>
                            <div className="d-flex align-items-center justify-content-center align-items-md-end justify-content-md-end h-100">
                                <div className="wp text-center text-md-right">
                                    <h2 className="text-white neon mb-0">Bebidas <img className="ml-2" src={icon_go} alt="Go" /></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeExtras;