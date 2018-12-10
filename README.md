**Leaflet Polyline (ReactJs)**


**Install**
--------------
- `npm install react-leaflet-polyline --save`

**Usage**
--------------
```
<LeafletPolyline color={'red'} 
                 positions={[[45.9205, 0.4394], [45.9205, 0.9228], [45.9205, 2.5488], [45.9205, 3.3837]]}/>
```

**Props**
--------------
- **color**: [string] color of Polyline, for example `red`
- **patterns**: [array of objects] pattern of Polyline, for example:
  ```
  [
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
  ]
  ```
- **positions**: [array] list of points, for example:
  ```
  [
    [45.9205, 0.4394],
    [45.9205, 0.9228],
    [45.9205, 2.5488],
    [45.9205, 3.3837]
  ]
  ```
