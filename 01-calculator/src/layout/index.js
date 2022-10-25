import React from "react";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";
import "../style/sass/_utils.scss";
import "./index.scss";
const Calculator = () => {
    return (
        <div className="Calculator">
            <Typography
                className="Title"
                variant="h1"
                align="center"
                color="red"
                size="3rem"
                mt="2rem"
            >
                Typography Component
            </Typography>

            <Button variant="contained" style={{ color: "red" }}>
                Button component
            </Button>
        </div>
    );
};

export default Calculator;
