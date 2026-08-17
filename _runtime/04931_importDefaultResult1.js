// _runtime/04931_importDefaultResult1.js
import _modDef4913 from "metro/04913__.js";
import decodeXPValueDefault from "04932_decodeXPValue.js";
import _modDef4934 from "metro/04934__.js";
import _modDef4936 from "metro/04936__.js";
import getStringValueDefault from "04937_getStringValue.js";
import getStringValueDefault2 from "04938_getStringValue.js";
import _modDef4939 from "metro/04939__.js";
import _modDef4940 from "metro/04940__.js";
import getDataView from "04910_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef4934);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef4936, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef4913.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef4913.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef4939;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef4913.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef4940;
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