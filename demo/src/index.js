import React from 'react';
import { render } from 'react-dom';
import {Map, Marker, TileLayer} from "react-leaflet";
import leaflet from "leaflet";

import LeafletPolyline from '../../src'
const MarkerIcon = leaflet.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconRetinaUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, 0],
});
class Demo extends React.Component {
    render() {
        return <div style={{height: 500, width: '100%'}}>
            <h1>React-Leaflet-Draw example</h1>
            <Map center={[45.9205, 0.9228]} zoom={9} zoomControl={false} style={{height: 500, width: '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />

                <Marker position={[45.9205, 0.4394]} icon={MarkerIcon}>
                </Marker>

                <Marker position={[45.9205, 3.3837]} icon={MarkerIcon}>
                </Marker>

                <LeafletPolyline positions={[[45.9205, 0.4394], [45.9205, 0.9228], [45.9205, 2.5488], [45.9205, 3.3837]]}/>
            </Map>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'));