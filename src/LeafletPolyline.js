import propTypes from "prop-types";
import Leaflet from "leaflet";
import {Layer} from "leaflet";
import "leaflet-polylinedecorator";
import 'leaflet/dist/leaflet.css';
import {Polyline as reactPoly} from 'react-leaflet'

export default class LeafletPolyline extends reactPoly {
    static defaultProps = {
        color: '#3042ff',
        patterns: [
            {
                offset: '10%',
                endOffset: '60%',
                repeat: '10%',
                symbol: L.Symbol.arrowHead({
                    pixelSize: 15,
                    pathOptions: {
                        stroke: true,
                        fillOpacity: 1,
                        weight: 0,
                        color: '#175fc2'
                    }
                })
            }
        ]
    };

    static propTypes = {
        color: propTypes.string,
        patterns: propTypes.array,
        positions: propTypes.array.isRequired
    };

    componentDidMount(props) {
        this.createLeafletElement(this.props);
    }

    createLeafletElement(props) {
        this.leafletElement = Layer;

        const {positions} = props;
        let line = Leaflet.polyline(positions);

        let layer = Leaflet.polylineDecorator(
            positions,
            {
                patterns: this.props.patterns
            }
        );

        this.context.layerContainer.addLayer(line);
        this.context.layerContainer.addLayer(layer);
    }

    updateLeafletElement(fromProps, toProps) {
    }
}