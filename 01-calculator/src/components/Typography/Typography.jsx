import React from "react";
import { CustomizeVariant } from "../../utils";
const Typography = (props) => {
    const { variant, align, size, color, children, className, style } = props;

    const Component = variant ? variant : "p";

    return (
        <Component
            className={className}
            style={CustomizeVariant(align, size, color, style)}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Typography;
