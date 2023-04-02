import React from "react";
import { Marker, Popup } from 'react-map-gl';

const PopupMarker = ({lon,lat,text,color}) => {
    return (
        <>
            <Popup
                longitude={lon} latitude={lat}
                anchor="bottom-right"
                onClose={() => setShowPopup(true)}>
                {text}
            </Popup>


            <Marker longitude={lon} latitude={lat} color={color}>
            </Marker>

        </>
    )
}

export default PopupMarker;