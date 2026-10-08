// _runtime/07821_IFD_TYPE_0TH.js
import _modDef7803 from "metro/07803__.js";
import _modDef7824 from "metro/07824__.js";
import _modDef7826 from "metro/07826__.js";
import _modDef7827 from "metro/07827__.js";
import _modDef7828 from "metro/07828__.js";
import _modDef7829 from "metro/07829__.js";
import _modDef7830 from "metro/07830__.js";
import 07800__ from "metro/07800__.js";
import decodeXPValue from "07822_decodeXPValue.js";

const objectAssignResult = module_7800.objectAssign({}, decodeXPValue, _modDef7824);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7826, interoperability: _modDef7827, mpf: null, canon: null, pentax: null };
if (_modDef7803.USE_MPF) {
  let importDefaultResult1 = _modDef7828;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7803.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7829;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7803.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7830;
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