// _runtime/metro/08395__.js
import colorPropType from "../08379_colorPropType.js";
import _mod8386 from "08386__.js";
import emptyFunction from "04434__.js";
import "module_4434";

const obj = {};
const module_8386 = Object.assign(_mod8386);
obj.color = colorPropType;
obj.fontFamily = emptyFunction.string;
obj.fontSize = emptyFunction.number;
obj.fontStyle = emptyFunction.oneOf(["normal", "italic"]);
obj.fontWeight = emptyFunction.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
obj.fontVariant = emptyFunction.arrayOf(
  emptyFunction.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"]),
);
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
