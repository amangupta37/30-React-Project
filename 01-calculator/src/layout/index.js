import React from "react";
import Typography from "../components/Typography/Typography";
import "../style/sass/_utils.scss";
const Calculator = () => {
    return (
        <div className="Calculator">
            <Typography
                className="Title"
                variant="h1"
                align="center"
                color="red"
                size="3rem"
            >
                Calculator
            </Typography>
        </div>
    );
};

export default Calculator;
