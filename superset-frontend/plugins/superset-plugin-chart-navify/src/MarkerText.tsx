import { Marker, Popup } from "react-map-gl";
import React from "react";

const MarkerText = ({ lon, lat, lab }) => {

    const [showPopup, setShowPopup] = React.useState(true);

    return (
        <>
            <Marker longitude={lon} latitude={lat} >
            </Marker>
            <Popup longitude={lon} latitude={lat}
                anchor="top"
                onClose={() => setShowPopup(true)}>
                {lab}
            </Popup>

        </>

    )
}

export default MarkerText;