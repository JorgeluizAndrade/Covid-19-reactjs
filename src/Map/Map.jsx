import React from "react";
import './map.css';
import { MapContainer, TileLayer } from 'react-leaflet'
import {showDataOnMap} from '../util'

function MyMap({center, zoom, casesType, countries}) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} className="leaflet-conteinar">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
};

export default MyMap;
