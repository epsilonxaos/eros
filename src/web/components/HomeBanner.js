import React, {Component} from 'react';

class HomeBanner extends Component {
    render(){
        return (
            <div className="home-banner">
                <div className="container-fluid w12 h-100 pt-5 d-flex align-items-end position-relative">
                    <div className="informacion">
                        <h3 className="mb-0 neon">Dejando nada a</h3>
                        <h1 className="mb-0 neon text-uppercase">La imaginación</h1>
                        <h3 className="mb-0">Consulta nuestro catálogo aquí</h3>
                    </div>

                    <div className="arrow bounce"> </div>
                </div>

                <div
                    className="video-banner-bg"
                    dangerouslySetInnerHTML={{ __html: '<iframe src="https://player.vimeo.com/video/11550303?autoplay=1&color=ffffff&title=0&byline=0&portrait=0&loop=10&background=1&muted=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'}} />                    
            </div>
        )
    }
}

export default HomeBanner;