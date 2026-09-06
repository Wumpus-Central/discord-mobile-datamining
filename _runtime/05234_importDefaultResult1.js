// _runtime/05234_importDefaultResult1.js
import _modDef5216 from "metro/05216__.js";
import decodeXPValueDefault from "05235_decodeXPValue.js";
import _modDef5237 from "metro/05237__.js";
import _modDef5239 from "metro/05239__.js";
import getStringValueDefault from "05240_getStringValue.js";
import getStringValueDefault2 from "05241_getStringValue.js";
import _modDef5242 from "metro/05242__.js";
import _modDef5243 from "metro/05243__.js";
import getDataView from "05213_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5237);
const obj = {
  "0th": objectAssignResult,
  "1st": decodeXPValueDefault,
  exif: objectAssignResult,
  gps: _modDef5239,
  interoperability: getStringValueDefault,
  mpf: null,
  canon: null,
  pentax: null,
};
if (_modDef5216.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5216.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5242;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5216.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5243;
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
