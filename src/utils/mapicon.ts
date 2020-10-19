import React from 'react';
import mapMarkerImg from '../assepts/Local.svg';
import LeaFlet from 'leaflet';

const mapIcon = LeaFlet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
})

export default mapIcon;