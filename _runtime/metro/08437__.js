// === Module 8437: ? ===

// Module 8437
import colorPropType from "colorPropType" /* 8421 */;
import _mod8428 from "module_8428" /* 8428 */;
import emptyFunction from "emptyFunction" /* 4307 */;

let obj = {};
const module_8428 = Object.assign(_mod8428);
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