// === Module 8330: ? ===

// Module 8330
import colorPropType from "colorPropType" /* 8314 */;
import _mod8321 from "module_8321" /* 8321 */;
import emptyFunction from "module_4389" /* 4389 */;
import "module_4389";

const obj = {};
const module_8321 = Object.assign(_mod8321);
obj.color = colorPropType;
obj.fontFamily = emptyFunction.string;
obj.fontSize = emptyFunction.number;
obj.fontStyle = emptyFunction.oneOf(["normal", "italic"]);
obj.fontWeight = emptyFunction.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
obj.fontVariant = emptyFunction.arrayOf(emptyFunction.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"]));
const size = { width: emptyFunction.number, height: emptyFunction.number };
obj.textShadowOffset = emptyFunction.shape(size);
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