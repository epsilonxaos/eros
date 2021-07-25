import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

import pin from '../../img/icons/icon_pin.png';

const containerStyle = {
    width: '100%',
    height: '450px'
};

const center = {
    lat: 20.937146,
    lng: -89.646503
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

const eros_1 = {lat: 20.938109, lng: -89.695346}
const eros_2 = {lat: 20.928531, lng: -89.596975}

class Maps extends Component {
    render() {
        return (
            <LoadScript
            googleMapsApiKey="AIzaSyDZ2z7aoo8okwvyHbaxfKwUi-sblBj5QYk"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                >
                
                    <Marker onLoad={onLoad} position={eros_1} icon={pin} />
                    <Marker onLoad={onLoad} position={eros_2} icon={pin} />
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Maps;