import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../img/logo-white.svg';
class Header extends Component {
    render(){
        return (
            <header>
                <nav className="nav-menu py-3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-8 col-md-3">
                                <Link to="/">
                                    <img src={logo} alt="Eros" className="logo" />
                                </Link>
                            </div>
                            <div className="col-md-9 d-none d-md-block">
                                <ul className="menu-list list-unstyled d-flex align-items-center justify-content-end p-0 m-0">
                                    <li><NavLink exact activeClassName="active" to="/">Nosotros</NavLink></li>
                                    <li className="ml-3 ml-lg-4"><NavLink exact activeClassName="active" to="/">Habitaciones</NavLink></li>
                                    <li className="ml-3 ml-lg-4"><NavLink exact activeClassName="active" to="/">Servicios</NavLink></li>
                                    <li className="ml-3 ml-lg-4"><NavLink exact activeClassName="active" to="/">Sexshop</NavLink></li>
                                    <li className="ml-3 ml-lg-4"><NavLink exact activeClassName="active" to="/">Catálogo</NavLink></li>
                                    <li className="ml-3 ml-lg-4"><NavLink exact activeClassName="active" to="/">Contacto</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-4 d-md-none text-right">
                                <div className="menu menu-3">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;