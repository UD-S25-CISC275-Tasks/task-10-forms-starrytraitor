import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<number>(0);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts remaining: {attempts}</div>
            <Form.Group>
                <Form.Label>Requested attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequests(
                            isNaN(parseInt(event.target.value))
                                ? 0
                                : parseInt(event.target.value)
                        );
                    }}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts > 0 ? attempts - 1 : 0);
                }}
                disabled={!attempts}
            >
                Use attempt
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + requests);
                }}
            >
                Gain requested attempt
            </Button>
        </div>
    );
}
