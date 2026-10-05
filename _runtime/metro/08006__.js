// _runtime/metro/08006__.js
import normalizeColor from "../07990_normalizeColor.js";
import _mod7997 from "07997__.js";
import "module_4707";
import module_4707_mod from "04707__.js";

let arrayOf;
let module_4707;
let size;
const obj = {
  color: normalizeColor,
  fontFamily: module_4707.string,
  fontSize: module_4707.number,
  fontStyle: module_4707.oneOf(["normal", "italic"]),
  fontWeight: module_4707.oneOf(["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]),
  fontVariant: arrayOf(
    module_4707.oneOf(["small-caps", "oldstyle-nums", "lining-nums", "tabular-nums", "proportional-nums"]),
  ),
  textShadowOffset: module_4707.shape(size),
  textShadowRadius: module_4707.number,
  textShadowColor: normalizeColor,
  letterSpacing: module_4707.number,
  lineHeight: module_4707.number,
  textAlign: module_4707.oneOf(["auto", "left", "right", "center", "justify"]),
  textAlignVertical: module_4707.oneOf(["auto", "top", "bottom", "center"]),
  includeFontPadding: module_4707.bool,
  textDecorationLine: module_4707.oneOf(["none", "underline", "line-through", "underline line-through"]),
  textDecorationStyle: module_4707.oneOf(["solid", "double", "dotted", "dashed"]),
  textDecorationColor: normalizeColor,
  textTransform: module_4707.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  writingDirection: module_4707.oneOf(["auto", "ltr", "rtl"]),
};
const module_7997 = Object.assign(_mod7997);
module_4707 = module_4707_mod;
arrayOf = module_4707.arrayOf;
module_4707 = module_4707_mod;
size = { width: module_4707.number, height: module_4707.number };
module_4707 = module_4707_mod;

export default obj;
