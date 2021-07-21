import React, {Component} from 'react';

import '../scss/web/home.scss';

class Home extends Component {
    render(){
        return (
            <div className="home-banner">
                <div
                    className="video-banner-bg"
                    dangerouslySetInnerHTML={{ __html: '<iframe src="https://player.vimeo.com/video/11550303?autoplay=1&color=ffffff&title=0&byline=0&portrait=0&loop=10&background=1&muted=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'}} />                    
            </div>
        );
    }
}

export default Home;