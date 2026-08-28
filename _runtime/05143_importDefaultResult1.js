// _runtime/05143_importDefaultResult1.js
import _modDef5125 from "metro/05125__.js";
import decodeXPValueDefault from "05144_decodeXPValue.js";
import _modDef5146 from "metro/05146__.js";
import _modDef5148 from "metro/05148__.js";
import getStringValueDefault from "05149_getStringValue.js";
import getStringValueDefault2 from "05150_getStringValue.js";
import _modDef5151 from "metro/05151__.js";
import _modDef5152 from "metro/05152__.js";
import getDataView from "05122_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5146);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5148, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5125.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5125.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5151;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5125.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5152;
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