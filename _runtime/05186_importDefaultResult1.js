// _runtime/05186_importDefaultResult1.js
import _modDef5168 from "metro/05168__.js";
import decodeXPValueDefault from "05187_decodeXPValue.js";
import _modDef5189 from "metro/05189__.js";
import _modDef5191 from "metro/05191__.js";
import getStringValueDefault from "05192_getStringValue.js";
import getStringValueDefault2 from "05193_getStringValue.js";
import _modDef5194 from "metro/05194__.js";
import _modDef5195 from "metro/05195__.js";
import getDataView from "05165_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5189);
const obj = {
  "0th": objectAssignResult,
  "1st": decodeXPValueDefault,
  exif: objectAssignResult,
  gps: _modDef5191,
  interoperability: getStringValueDefault,
  mpf: null,
  canon: null,
  pentax: null,
};
if (_modDef5168.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5168.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5194;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5168.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5195;
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
