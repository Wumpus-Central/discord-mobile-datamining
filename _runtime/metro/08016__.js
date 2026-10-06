// _runtime/metro/08016__.js
import normalizeColor from "../08000_normalizeColor.js";
import _mod8007 from "08007__.js";
import "module_4713";
import module_4713_mod from "04713__.js";

let arrayOf;
let module_4713;
let size;
const obj = {
  color: normalizeColor,
  fontFamily: module_4713.string,
  fontSize: module_4713.number,
  fontStyle: module_4713.oneOf(["normal", "italic"]),
  fontWeight: module_4713.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]),
  fontVariant: arrayOf(
    module_4713.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"]),
  ),
  textShadowOffset: module_4713.shape(size),
  textShadowRadius: module_4713.number,
  textShadowColor: normalizeColor,
  letterSpacing: module_4713.number,
  lineHeight: module_4713.number,
  textAlign: module_4713.oneOf(["auto", "left", "right", "center", "justify"]),
  textAlignVertical: module_4713.oneOf(["auto", "top", "bottom", "center"]),
  includeFontPadding: module_4713.bool,
  textDecorationLine: module_4713.oneOf(["none", "underline", "line-through", "underline line-through"]),
  textDecorationStyle: module_4713.oneOf(["solid", "double", "dotted", "dashed"]),
  textDecorationColor: normalizeColor,
  textTransform: module_4713.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  writingDirection: module_4713.oneOf(["auto", "ltr", "rtl"]),
};
const module_8007 = Object.assign(_mod8007);
module_4713 = module_4713_mod;
arrayOf = module_4713.arrayOf;
module_4713 = module_4713_mod;
size = { width: module_4713.number, height: module_4713.number };
module_4713 = module_4713_mod;

export default obj;
