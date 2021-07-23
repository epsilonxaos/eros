import React, {Component} from 'react';

import '../scss/web/home.scss';

import icon_go from '../img/icons/icon-link.png';
import habitacion_bg_1 from '../img/habitaciones-bg-1.jpg';
import habitacion_bg_2 from '../img/habitaciones-bg-2.jpg';
import extras_bg_1 from '../img/extras-bg-1.jpg';
import extras_bg_2 from '../img/extras-bg-2.jpg';
import extras_bg_3 from '../img/extras-bg-3.jpg';
import extras_bg_4 from '../img/extras-bg-4.jpg';
class Home extends Component {
    render(){
        return (
            <>
                <div className="home-banner">
                    <div className="container-fluid w12 h-100 pt-5 d-flex align-items-end position-relative">
                        <div className="informacion">
                            <h3 className="mb-0 neon">Dejando nada a</h3>
                            <h1 className="mb-0 neon text-uppercase">La imaginación</h1>
                            <h3 className="mb-0">Consulta nuestro catálogo aquí</h3>
                        </div>

                        <div class="arrow bounce"> </div>
                    </div>

                    <div
                        className="video-banner-bg"
                        dangerouslySetInnerHTML={{ __html: '<iframe src="https://player.vimeo.com/video/11550303?autoplay=1&color=ffffff&title=0&byline=0&portrait=0&loop=10&background=1&muted=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'}} />                    
                </div>

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
            </>
        );
    }
}

export default Home;