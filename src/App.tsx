import MapComp from "./components/MapComp";
import LocationForm from "./components/Location";
import "./styles.css";
import Random from "./components/Random";

function App() {
    return (
        <>
            <div
                className="d-flex flex-column justify-content-center gap-4 align-items-center"
                style={{
                    backgroundColor: "#607274",
                }}
            >
                <h1>Random Location Generator</h1>
                <MapComp />
                <LocationForm />
                <Random />
            </div>
        </>
    );
}

export default App;
