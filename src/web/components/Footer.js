import React, {Component} from 'react';

import icon_facebook from '../../img/icons/facebook.png';
import icon_twitter from '../../img/icons/twitter.png';
import icon_instagram from '../../img/icons/instagram.png';
import icon_whatsapp from '../../img/icons/whatsapp.png';

class Footer extends Component {
    render(){
        return (
            <footer>
                <div className="container-fluid w12">
                    <div className="row">
                        <div className="col-12 col-md-9 text-center text-md-left d-md-flex align-items-md-center justify-content-md-start">
                            <p className="mb-2 mb-md-0 mr-md-3">Política de privacidad</p>
                            <p className="mb-2 mb-md-0 mr-md-3">Términos & condiciones</p>
                            <p className="mb-0">FAQ's</p>
                        </div>
                        <div className="col-12 col-md-3 text-center text-md-right">
                            <img className="mr-2" src={icon_facebook} alt="Facebook" />
                            <img className="mr-2" src={icon_twitter} alt="Twitter" />
                            <img className="mr-2" src={icon_instagram} alt="Instagram" />
                            <img src={icon_whatsapp} alt="Whatsapp" />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;