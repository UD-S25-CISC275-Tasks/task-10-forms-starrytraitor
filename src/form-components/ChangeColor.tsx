import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "magenta"
];

export function ChangeColor(): React.JSX.Element {
    const [currentColor, updateColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string) => (
                <Form.Check
                    inline
                    name="colorOption"
                    key={"option-".concat(color)}
                    type="radio"
                    label={color}
                    style={{ backgroundColor: color }}
                    onChange={() => {
                        updateColor(color);
                    }}
                    value={color}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: currentColor }}
            >
                {currentColor}
            </div>
        </div>
    );
}
