import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [ans, setAns] = useState<string>("");

    function updateAns(event: React.ChangeEvent<HTMLInputElement>): void {
        setAns(event.target.value);
    }

    return (
        <div>
            <div>
                <h3>Check Answer</h3>
            </div>
            <Form.Group controlId="answerForm">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    type="text"
                    value={ans}
                    onChange={updateAns}
                ></Form.Control>
            </Form.Group>
            <div>{ans === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
