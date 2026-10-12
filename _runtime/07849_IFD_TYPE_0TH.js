// _runtime/07849_IFD_TYPE_0TH.js
import _modDef7831 from "metro/07831__.js";
import _modDef7852 from "metro/07852__.js";
import _modDef7854 from "metro/07854__.js";
import _modDef7855 from "metro/07855__.js";
import _modDef7856 from "metro/07856__.js";
import _modDef7857 from "metro/07857__.js";
import _modDef7858 from "metro/07858__.js";
import 07828__ from "metro/07828__.js";
import decodeXPValue from "07850_decodeXPValue.js";

const objectAssignResult = module_7828.objectAssign({}, decodeXPValue, _modDef7852);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7854, interoperability: _modDef7855, mpf: null, canon: null, pentax: null };
if (_modDef7831.USE_MPF) {
  let importDefaultResult1 = _modDef7856;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7831.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7857;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7831.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7858;
} else {
  importDefaultResult3 = {};
}
obj.pentax = importDefaultResult3;

export default obj;
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";