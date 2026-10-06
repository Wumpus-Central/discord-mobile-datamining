// _runtime/metro/08012__.js
import normalizeColor2 from "../08000_normalizeColor.js";
import _mod8008 from "08008__.js";
import normalizeColor3 from "../08009_normalizeColor.js";
import merged22 from "../08010_merged2.js";
import "module_4713";
import module_4713_mod from "04713__.js";

let module_4713;
const obj = {
  resizeMode: module_4713.oneOf(["center", "contain", "cover", "repeat", "stretch"]),
  backfaceVisibility: module_4713.oneOf(["visible", "hidden"]),
  backgroundColor: normalizeColor2,
  borderColor: normalizeColor2,
  borderWidth: module_4713.number,
  borderRadius: module_4713.number,
  overflow: module_4713.oneOf(["visible", "hidden"]),
  tintColor: normalizeColor2,
  opacity: module_4713.number,
  overlayColor: module_4713.string,
  borderTopLeftRadius: module_4713.number,
  borderTopRightRadius: module_4713.number,
  borderBottomLeftRadius: module_4713.number,
  borderBottomRightRadius: module_4713.number,
};
const size = Object.assign(_mod8008);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4713 = module_4713_mod;

export default obj;
