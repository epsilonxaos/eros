import React, {Component} from 'react';

import '../scss/web/home.scss';

import HomeBanner from './components/HomeBanner';
import HomeHabitaciones from './components/HomeHabitaciones';
import HomeExtras from './components/HomeExtras';
import HomeContacto from './components/HomeContacto';
class Home extends Component {
    render(){
        return (
            <>
                <HomeBanner />
                <HomeHabitaciones />
                <HomeExtras />     
                <HomeContacto />           
            </>
        );
    }
}

export default Home;