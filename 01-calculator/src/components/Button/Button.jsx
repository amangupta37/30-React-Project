import React from "react";
import "./Button.scss";
import { CustomizeVariant } from "../../utils";
const Button = (props) => {
    const { variant, children, disabled, style, onClick, className } = props;

    const CustomVariant = variant ? `Button--${variant}` : "";

    return (
        <button
            className={`Button ${CustomVariant} ${className}`}
            disabled={disabled}
            style={CustomizeVariant(style, props)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
