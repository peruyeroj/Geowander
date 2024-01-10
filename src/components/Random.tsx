import { Button } from "react-bootstrap";
function randomCoords() {
    const handleSubmit = () => {
        document.dispatchEvent(
            new CustomEvent("updateCoords", {
                bubbles: true,
                detail: {
                    latMin: -90,
                    latMax: 90,
                    longMin: -180,
                    longMax: 180,
                },
            }),
        );
    };
    return (
        <div>
            <Button onClick={handleSubmit}>Random</Button>
        </div>
    );
}

export default randomCoords;
