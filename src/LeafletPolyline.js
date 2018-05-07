import PropTypes from "prop-types";
import Leaflet from "leaflet";
import {Layer} from "leaflet";
import "leaflet-polylinedecorator";
import 'leaflet/dist/leaflet.css';
import {Polyline as reactPoly} from 'react-leaflet'

export default class LeafletPolyline extends reactPoly {
    static defaultProps = {
        color: '#3042ff',
    };

    static propTypes = {
        color: PropTypes.string,
        patterns: PropTypes.array,
        positions: PropTypes.array.isRequired
    };

    createLeafletElement(props) {
        this.leafletElement = Layer;

        const {positions} = props;
        let line = Leaflet.polyline(positions);
        let pat = this.props.patterns || [
            {
                offset: '10%',
                endOffset: '60%',
                repeat: '10%',
                symbol: Leaflet.Symbol.arrowHead({
                    pixelSize: 15,
                    pathOptions: {
                        stroke: true,
                        fillOpacity: 1,
                        weight: 0,
                        color: '#175fc2'
                    }
                })
            }
        ];
        let layer = Leaflet.polylineDecorator(
            positions,
            {
                patterns: pat
            }
        );
        return Leaflet.layerGroup([layer, line]);
    }
}