// _runtime/01871_colors.js
import get_ActivityIndicator from "get ActivityIndicator";

let Platform;
let PlatformColor;
({ Platform, PlatformColor } = get_ActivityIndicator);

export const colors = { light: { primary: "#2c2c2c", disabled: "#B0BEC5", background: "#f3f3f4", ripple: "#bcbcbcbc" }, dark: { primary: "#fafafa", disabled: "#707070", background: "#2C2C2E", ripple: "#F8F8F888" } };