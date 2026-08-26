// _runtime/05125_importDefaultResult1.js
import _modDef5107 from "metro/05107__.js";
import decodeXPValueDefault from "05126_decodeXPValue.js";
import _modDef5128 from "metro/05128__.js";
import _modDef5130 from "metro/05130__.js";
import getStringValueDefault from "05131_getStringValue.js";
import getStringValueDefault2 from "05132_getStringValue.js";
import _modDef5133 from "metro/05133__.js";
import _modDef5134 from "metro/05134__.js";
import getDataView from "05104_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5128);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5130, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5107.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5107.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5133;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5107.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5134;
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