// _runtime/metro/08002__.js
import normalizeColor2 from "../07990_normalizeColor.js";
import _mod7998 from "07998__.js";
import normalizeColor3 from "../07999_normalizeColor.js";
import merged22 from "../08000_merged2.js";
import "module_4707";
import module_4707_mod from "04707__.js";

let module_4707;
const obj = {
  resizeMode: module_4707.oneOf(["center", "contain", "cover", "repeat", "stretch"]),
  backfaceVisibility: module_4707.oneOf(["visible", "hidden"]),
  backgroundColor: normalizeColor2,
  borderColor: normalizeColor2,
  borderWidth: module_4707.number,
  borderRadius: module_4707.number,
  overflow: module_4707.oneOf(["visible", "hidden"]),
  tintColor: normalizeColor2,
  opacity: module_4707.number,
  overlayColor: module_4707.string,
  borderTopLeftRadius: module_4707.number,
  borderTopRightRadius: module_4707.number,
  borderBottomLeftRadius: module_4707.number,
  borderBottomRightRadius: module_4707.number,
};
const size = Object.assign(_mod7998);
const normalizeColor = Object.assign(normalizeColor3);
const merged2 = Object.assign(merged22);
module_4707 = module_4707_mod;

export default obj;
