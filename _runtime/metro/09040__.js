// _runtime/metro/09040__.js
import colorPropType from "../09024_colorPropType.js";
import _mod9031 from "09031__.js";
import emptyFunction from "../04210_emptyFunction.js";

let obj = {};
const module_9031 = Object.assign(_mod9031);
obj.color = colorPropType;
obj.fontFamily = emptyFunction.string;
obj.fontSize = emptyFunction.number;
obj.fontStyle = emptyFunction.oneOf(["normal", "italic"]);
obj.fontWeight = emptyFunction.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
obj.fontVariant = emptyFunction.arrayOf(emptyFunction.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"]));
obj = { width: emptyFunction.number, height: emptyFunction.number };
obj.textShadowOffset = emptyFunction.shape(obj);
obj.textShadowRadius = emptyFunction.number;
obj.textShadowColor = colorPropType;
obj.letterSpacing = emptyFunction.number;
obj.lineHeight = emptyFunction.number;
obj.textAlign = emptyFunction.oneOf(["auto", "left", "right", "center", "justify"]);
obj.textAlignVertical = emptyFunction.oneOf(["auto", "top", "bottom", "center"]);
obj.includeFontPadding = emptyFunction.bool;
obj.textDecorationLine = emptyFunction.oneOf(["none", "underline", "line-through", "underline line-through"]);
obj.textDecorationStyle = emptyFunction.oneOf(["solid", "double", "dotted", "dashed"]);
obj.textDecorationColor = colorPropType;
obj.textTransform = emptyFunction.oneOf(["none", "capitalize", "uppercase", "lowercase"]);
obj.writingDirection = emptyFunction.oneOf(["auto", "ltr", "rtl"]);

export default obj;