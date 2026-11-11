// _runtime/08893_IFD_TYPE_0TH.js
import _modDef8875 from "metro/08875__.js";
import _modDef8896 from "metro/08896__.js";
import _modDef8898 from "metro/08898__.js";
import _modDef8899 from "metro/08899__.js";
import _modDef8900 from "metro/08900__.js";
import _modDef8901 from "metro/08901__.js";
import _modDef8902 from "metro/08902__.js";
import 08872__ from "metro/08872__.js";
import decodeXPValue from "08894_decodeXPValue.js";

const objectAssignResult = module_8872.objectAssign({}, decodeXPValue, _modDef8896);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8898, interoperability: _modDef8899, mpf: null, canon: null, pentax: null };
if (_modDef8875.USE_MPF) {
  let importDefaultResult1 = _modDef8900;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8875.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8901;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8875.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8902;
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