async function reverseGeocode(lat: number, lng: number): Promise<void> {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
    const response = await fetch(url);
    const location = await response.json();
    console.log(location["plus_code"]["global_code"]);
}

export default reverseGeocode;
