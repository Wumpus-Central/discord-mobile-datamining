// _runtime/metro/08600__.js
import colorPropType from "../08584_colorPropType.js";
import _mod8591 from "08591__.js";
import emptyFunction_mod from "04585__.js";
import "module_4585";

const obj = {};
const module_8591 = Object.assign(_mod8591);
obj.color = colorPropType;
obj.fontFamily = emptyFunction.string;
obj.fontSize = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.fontStyle = emptyFunction.oneOf(["normal", "italic"]);
let emptyFunction = emptyFunction_mod;
obj.fontWeight = emptyFunction.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
let emptyFunction = emptyFunction_mod;
obj.fontVariant = emptyFunction.arrayOf(
  emptyFunction.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"]),
);
let emptyFunction = emptyFunction_mod;
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.textShadowOffset = emptyFunction.shape(size);
obj.textShadowRadius = emptyFunction.number;
obj.textShadowColor = colorPropType;
obj.letterSpacing = emptyFunction.number;
obj.lineHeight = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.textAlign = emptyFunction.oneOf(["auto", "left", "right", "center", "justify"]);
let emptyFunction = emptyFunction_mod;
obj.textAlignVertical = emptyFunction.oneOf(["auto", "top", "bottom", "center"]);
obj.includeFontPadding = emptyFunction.bool;
let emptyFunction = emptyFunction_mod;
obj.textDecorationLine = emptyFunction.oneOf(["none", "underline", "line-through", "underline line-through"]);
let emptyFunction = emptyFunction_mod;
obj.textDecorationStyle = emptyFunction.oneOf(["solid", "double", "dotted", "dashed"]);
obj.textDecorationColor = colorPropType;
let emptyFunction = emptyFunction_mod;
obj.textTransform = emptyFunction.oneOf(["none", "capitalize", "uppercase", "lowercase"]);
let emptyFunction = emptyFunction_mod;
obj.writingDirection = emptyFunction.oneOf(["auto", "ltr", "rtl"]);

export default obj;
