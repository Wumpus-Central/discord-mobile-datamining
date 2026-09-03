// _runtime/05187_importDefaultResult1.js
import _modDef5169 from "metro/05169__.js";
import decodeXPValueDefault from "05188_decodeXPValue.js";
import _modDef5190 from "metro/05190__.js";
import _modDef5192 from "metro/05192__.js";
import getStringValueDefault from "05193_getStringValue.js";
import getStringValueDefault2 from "05194_getStringValue.js";
import _modDef5195 from "metro/05195__.js";
import _modDef5196 from "metro/05196__.js";
import getDataView from "05166_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5190);
const obj = {
  "0th": objectAssignResult,
  "1st": decodeXPValueDefault,
  exif: objectAssignResult,
  gps: _modDef5192,
  interoperability: getStringValueDefault,
  mpf: null,
  canon: null,
  pentax: null,
};
if (_modDef5169.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5169.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5195;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5169.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5196;
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
