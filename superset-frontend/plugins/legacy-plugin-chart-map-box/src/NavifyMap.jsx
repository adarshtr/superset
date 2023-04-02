import React, { useRef, useEffect, useState, forwardRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoiYWRhcnNodHIiLCJhIjoiY2xmN3F0czg3MHRwazNzcGMwZHVrdnQ2MSJ9.Egne08IA6Lu64zYYGU9nQg";

const NavifyMap = ({refen}) => {
    debugger;
    const mapContainerRef = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
            <div ref={ mapContainerRef } className="map-container" />
        </div>
    );
}

export default NavifyMap;