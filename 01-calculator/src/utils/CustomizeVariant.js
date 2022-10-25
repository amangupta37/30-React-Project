export default function CustomizeVariant(align, size, color, style, props) {
    const sx = style ? style : "";
    const CustomStyle = {
        textAlign: align ? align : "",
        fontSize: size ? size : "",
        color: color ? color : "",

        /* Add custom margin */
        margin: props?.m ? props?.m : "",
        marginTop: props?.mt ? props?.mt : "",
        marginLeft: props?.ml ? props?.ml : "",
        marginRight: props?.mr ? props?.mr : "",

        /* Add custom padding */
        padding: props?.p ? props?.p : "",
        paddingTop: props?.pt ? props?.pt : "",
        paddingLeft: props?.pl ? props?.pl : "",
        paddingRight: props?.pr ? props?.pr : "",
    };

    const UpdatedCustomStyle = { ...CustomStyle, ...sx };

    return UpdatedCustomStyle;
}
