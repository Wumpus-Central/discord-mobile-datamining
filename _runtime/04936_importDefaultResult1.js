// _runtime/04936_importDefaultResult1.js
import _modDef4918 from "metro/04918__.js";
import decodeXPValueDefault from "04937_decodeXPValue.js";
import _modDef4939 from "metro/04939__.js";
import _modDef4941 from "metro/04941__.js";
import getStringValueDefault from "04942_getStringValue.js";
import getStringValueDefault2 from "04943_getStringValue.js";
import _modDef4944 from "metro/04944__.js";
import _modDef4945 from "metro/04945__.js";
import getDataView from "04915_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef4939);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef4941, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef4918.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef4918.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef4944;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef4918.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef4945;
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