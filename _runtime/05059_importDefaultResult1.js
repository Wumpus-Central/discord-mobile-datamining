// _runtime/05059_importDefaultResult1.js
import _modDef5041 from "metro/05041__.js";
import decodeXPValueDefault from "05060_decodeXPValue.js";
import _modDef5062 from "metro/05062__.js";
import _modDef5064 from "metro/05064__.js";
import getStringValueDefault from "05065_getStringValue.js";
import getStringValueDefault2 from "05066_getStringValue.js";
import _modDef5067 from "metro/05067__.js";
import _modDef5068 from "metro/05068__.js";
import getDataView from "05038_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5062);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5064, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5041.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5041.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5067;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5041.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5068;
} else {
  importDefaultResult3 = {};
}
obj[7] = importDefaultResult3;

export default obj;
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";