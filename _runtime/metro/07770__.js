// === Module 7770: ? ===

// Module 7770
import colorPropType from "colorPropType" /* 7754 */;
import _mod7761 from "module_7761" /* 7761 */;
import emptyFunction_mod from "module_4660" /* 4660 */;
import "module_4660";

const obj = {};
const module_7761 = Object.assign(_mod7761);
obj.color = colorPropType;
obj.fontFamily = emptyFunction.string;
obj.fontSize = emptyFunction.number;
let emptyFunction = emptyFunction_mod;
obj.fontStyle = emptyFunction.oneOf(["normal", "italic"]);
let emptyFunction = emptyFunction_mod;
obj.fontWeight = emptyFunction.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
let emptyFunction = emptyFunction_mod;
obj.fontVariant = emptyFunction.arrayOf(emptyFunction.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"]));
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