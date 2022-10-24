import React from "react";

const Typography = (props) => {
    const { variant, align, size, color, children, className, style } = props;

    const Component = variant ? variant : "p";

    const CustomizeVariant = () => {
        const sx = style ? style : "";

        const CustomStyle = {
            textAlign: align ? align : "",
            fontSize: size ? size : "",
            color: color ? color : "",

            /* Add custom margin */
            margin: props.m ? props.m : "",
            marginTop: props.mt ? props.mt : "",
            marginLeft: props.ml ? props.ml : "",
            marginRight: props.mr ? props.mr : "",

            /* Add custom padding */
            padding: props.p ? props.p : "",
            paddingTop: props.pt ? props.pt : "",
            paddingLeft: props.pl ? props.pl : "",
            paddingRight: props.pr ? props.pr : "",

            /* Add additional styling */
            ...sx,
        };

        return CustomStyle;
    };

    return (
        <Component className={className} style={CustomizeVariant()}>
            {children}
        </Component>
    );
};

export default Typography;
