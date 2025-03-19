import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inEditMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function switchEditMode(event: React.ChangeEvent<HTMLInputElement>): void {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        setUserName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                checked={inEditMode}
                onChange={switchEditMode}
            ></Form.Check>
            {!inEditMode ? (
                <div>
                    {userName} is {isStudent ? "" : "not "} a student.
                </div>
            ) : (
                <div>
                    <Form.Group controlId="studentNameForm">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={updateName}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="studentForm">
                        <Form.Label>are you a student?</Form.Label>
                        <Form.Check
                            type="checkbox"
                            checked={isStudent}
                            onChange={updateStudent}
                        ></Form.Check>
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
