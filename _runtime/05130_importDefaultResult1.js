// _runtime/05130_importDefaultResult1.js
import _modDef5112 from "metro/05112__.js";
import decodeXPValueDefault from "05131_decodeXPValue.js";
import _modDef5133 from "metro/05133__.js";
import _modDef5135 from "metro/05135__.js";
import getStringValueDefault from "05136_getStringValue.js";
import getStringValueDefault2 from "05137_getStringValue.js";
import _modDef5138 from "metro/05138__.js";
import _modDef5139 from "metro/05139__.js";
import getDataView from "05109_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5133);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5135, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5112.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5112.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5138;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5112.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5139;
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