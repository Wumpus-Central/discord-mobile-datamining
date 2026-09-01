// _runtime/05178_importDefaultResult1.js
import _modDef5160 from "metro/05160__.js";
import decodeXPValueDefault from "05179_decodeXPValue.js";
import _modDef5181 from "metro/05181__.js";
import _modDef5183 from "metro/05183__.js";
import getStringValueDefault from "05184_getStringValue.js";
import getStringValueDefault2 from "05185_getStringValue.js";
import _modDef5186 from "metro/05186__.js";
import _modDef5187 from "metro/05187__.js";
import getDataView from "05157_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5181);
const obj = {
  "0th": objectAssignResult,
  "1st": decodeXPValueDefault,
  exif: objectAssignResult,
  gps: _modDef5183,
  interoperability: getStringValueDefault,
  mpf: null,
  canon: null,
  pentax: null,
};
if (_modDef5160.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5160.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5186;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5160.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5187;
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
