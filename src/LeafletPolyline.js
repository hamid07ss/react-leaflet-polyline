import propTypes from "prop-types";
import Leaflet from "leaflet";
import "leaflet-polylinedecorator";
import 'leaflet/dist/leaflet.css';
import { Polyline as reactPoly } from 'react-leaflet'

export default class LeafletPolyline extends reactPoly {
    static defaultProps = {
        color: '#3042ff'
    };

    static propTypes = {
        color: propTypes.string,
        positions: propTypes.array.isRequired
    };

    createLeafletElement(props) {
        const {positions} = props;
        let line = Leaflet.polyline(positions);
        let top = this.context.map.latLngToLayerPoint(line.getBounds()._northEast);
        let bot = this.context.map.latLngToLayerPoint(line.getBounds()._southWest);


        return Leaflet.polylineDecorator(
            positions,
            {
                patterns: [
                    { offset: 0, repeat: 1, symbol: L.Symbol.dash({pixelSize: 1,pathOptions: {color: this.props.color, weight: 3}}) },
                    {offset: top.distanceTo(bot) / 3, repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {
                        stroke: true,
                        weight: 3,
                        color: this.props.color
                    }})}
                ]
            }
        );
    }

    updateLeafletElement(fromProps, toProps) {
        if (toProps.positions !== fromProps.positions) {
            this.leafletElement.setLatLngs(toProps.positions)
        }
    }
}