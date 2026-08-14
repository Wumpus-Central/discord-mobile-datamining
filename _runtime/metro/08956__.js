// _runtime/metro/08956__.js
import 08947__ from "08947__.js";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";
import emptyFunction from "emptyFunction";

let obj = {};
obj.color = require("colorPropType");
obj.fontFamily = require("emptyFunction").string;
obj.fontSize = require("emptyFunction").number;
obj.fontStyle = emptyFunction.oneOf(["normal", "italic"]);
obj.fontWeight = emptyFunction.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
obj.fontVariant = emptyFunction.arrayOf(emptyFunction.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"]));
obj = { width: require("emptyFunction").number, height: require("emptyFunction").number };
obj.textShadowOffset = emptyFunction.shape(obj);
obj.textShadowRadius = require("emptyFunction").number;
obj.textShadowColor = require("colorPropType");
obj.letterSpacing = require("emptyFunction").number;
obj.lineHeight = require("emptyFunction").number;
obj.textAlign = emptyFunction.oneOf(["auto", "left", "right", "center", "justify"]);
obj.textAlignVertical = emptyFunction.oneOf(["auto", "top", "bottom", "center"]);
obj.includeFontPadding = require("emptyFunction").bool;
obj.textDecorationLine = emptyFunction.oneOf(["none", "underline", "line-through", "underline line-through"]);
obj.textDecorationStyle = emptyFunction.oneOf(["solid", "double", "dotted", "dashed"]);
obj.textDecorationColor = require("colorPropType");
obj.textTransform = emptyFunction.oneOf(["none", "capitalize", "uppercase", "lowercase"]);
obj.writingDirection = emptyFunction.oneOf(["auto", "ltr", "rtl"]);

export default obj;