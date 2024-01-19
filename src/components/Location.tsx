import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { RangeType } from "./MapComp";
import { Form } from "react-bootstrap";
import { OverlayInject } from "@cthacker/overlaytriggerinject";

const DEFAULT_VALUES: RangeType = {
    latMin: 0,
    latMax: 0,
    longMin: 0,
    longMax: 0,
};

function LocationForm() {
    const { register, getValues, formState } = useForm<RangeType>({
        defaultValues: DEFAULT_VALUES,
        criteriaMode: "all",
        mode: "all",
        reValidateMode: "onChange",
    });
    const { isValid, errors, dirtyFields } = formState;

    const handleSubmit = () => {
        const { latMin, latMax, longMin, longMax } = getValues();
        document.dispatchEvent(
            new CustomEvent("updateCoords", {
                bubbles: true,
                detail: {
                    latMin: latMin,
                    latMax: latMax,
                    longMin: longMin,
                    longMax: longMax,
                },
            }),
        );
    };
    //console.log(errors);
    return (
        <div className="w-50 d-flex flex-column gap-3 align-items-center">
            <div className="d-flex flex-row justify-content-between w-50">
                <Form.Group controlId="min-latitude-form">
                    <Form.Label>Minimum Latitude:</Form.Label>
                    <OverlayInject
                        show={errors.latMin !== undefined}
                        title={errors.latMin?.message}
                        placement="left"
                    >
                        <Form.Control
                            isValid={
                                dirtyFields.latMin !== undefined &&
                                errors?.latMin === undefined
                            }
                            isInvalid={
                                dirtyFields.latMin !== undefined &&
                                errors?.latMin !== undefined
                            }
                            {...register("latMin", {
                                valueAsNumber: true,
                                min: {
                                    value: -90,
                                    message: "be above -90",
                                },
                                max: {
                                    value: 90,
                                    message: "be below 90",
                                },
                            })}
                        />
                    </OverlayInject>
                </Form.Group>
                <Form.Group controlId="max-latitude-form">
                    <Form.Label>Maximum Latitude:</Form.Label>
                    <OverlayInject
                        show={errors.latMax !== undefined}
                        title={errors.latMax?.message}
                        placement="right"
                    >
                        <Form.Control
                            isValid={
                                dirtyFields.latMax !== undefined &&
                                errors?.latMax === undefined
                            }
                            isInvalid={
                                dirtyFields.latMax !== undefined &&
                                errors?.latMax !== undefined
                            }
                            {...register("latMax", {
                                valueAsNumber: true,
                                min: {
                                    value: -90,
                                    message: "be above -90",
                                },
                                max: {
                                    value: 90,
                                    message: "be below 90",
                                },
                            })}
                        />
                    </OverlayInject>
                </Form.Group>
            </div>
            <div className="d-flex flex-row justify-content-between w-50">
                <Form.Group controlId="min-longitude-form">
                    <Form.Label>Minimum Longitude:</Form.Label>
                    <OverlayInject
                        show={errors.longMin !== undefined}
                        title={errors.longMin?.message}
                        placement="left"
                    >
                        <Form.Control
                            isValid={
                                dirtyFields.longMin !== undefined &&
                                errors?.longMin === undefined
                            }
                            isInvalid={
                                dirtyFields.longMin !== undefined &&
                                errors?.longMin !== undefined
                            }
                            {...register("longMin", {
                                valueAsNumber: true,
                                min: {
                                    value: -180,
                                    message: "be above -180",
                                },
                                max: {
                                    value: 180,
                                    message: "be below 180",
                                },
                            })}
                        />
                    </OverlayInject>
                </Form.Group>
                <Form.Group controlId="max-longitude-form">
                    <Form.Label>Maximum Longitude:</Form.Label>
                    <OverlayInject
                        show={errors.longMax !== undefined}
                        title={errors.longMax?.message}
                        placement="right"
                    >
                        <Form.Control
                            isValid={
                                dirtyFields.longMax !== undefined &&
                                errors?.longMax === undefined
                            }
                            isInvalid={
                                dirtyFields.longMax !== undefined &&
                                errors?.longMax !== undefined
                            }
                            {...register("longMax", {
                                valueAsNumber: true,
                                min: {
                                    value: -180,
                                    message: "be above -180",
                                },
                                max: {
                                    value: 180,
                                    message: "be below 180",
                                },
                            })}
                        />
                    </OverlayInject>
                </Form.Group>
            </div>
            <Button
                variant={isValid ? "primary" : "secondary"}
                className="w-50"
                onClick={handleSubmit}
                disabled={!isValid}
            >
                {"Submit"}
            </Button>
        </div>
    );
}

export default LocationForm;
