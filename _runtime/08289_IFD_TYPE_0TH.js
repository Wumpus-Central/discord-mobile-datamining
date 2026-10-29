// _runtime/08289_IFD_TYPE_0TH.js
import _modDef8271 from "metro/08271__.js";
import _modDef8292 from "metro/08292__.js";
import _modDef8294 from "metro/08294__.js";
import _modDef8295 from "metro/08295__.js";
import _modDef8296 from "metro/08296__.js";
import _modDef8297 from "metro/08297__.js";
import _modDef8298 from "metro/08298__.js";
import 08268__ from "metro/08268__.js";
import decodeXPValue from "08290_decodeXPValue.js";

const objectAssignResult = module_8268.objectAssign({}, decodeXPValue, _modDef8292);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8294, interoperability: _modDef8295, mpf: null, canon: null, pentax: null };
if (_modDef8271.USE_MPF) {
  let importDefaultResult1 = _modDef8296;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8271.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8297;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8271.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8298;
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