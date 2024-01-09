import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import getRandomNumberBetween from "../functions/getRandomNumberBetween";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
console.log(apiKey);

export type MapCoords = {
    latitude: number;
    longitude: number;
};

export type RangeType = {
    latMin: number;
    latMax: number;
    longMin: number;
    longMax: number;
};
const MapComp = () => {
    const [coords, setCoords] = React.useState<MapCoords>({
        latitude: 53.54992,
        longitude: 10.00678,
    });
    function onCoordChangeListener(event) {
        console.log("received event");
        const customEvent = event as CustomEvent<RangeType>;
        const latitude = getRandomNumberBetween(
            customEvent.detail.latMin,
            customEvent.detail.latMax,
        );
        const longitude = getRandomNumberBetween(
            customEvent.detail.longMin,
            customEvent.detail.longMax,
        );
        console.log("New latitude:", latitude);
        console.log("New longitude:", longitude);
        setCoords({ latitude, longitude });
    }

    React.useEffect(() => {
        document.addEventListener("updateCoords", onCoordChangeListener);
    }, []);

    return (
        <APIProvider apiKey={apiKey}>
            <div style={{ height: "500px", width: "100%" }}>
                <Map
                    zoom={10}
                    center={{ lat: coords.latitude, lng: coords.longitude }}
                />
            </div>
        </APIProvider>
    );
};
export default MapComp;
