// _runtime/05146_importDefaultResult1.js
import _modDef5128 from "metro/05128__.js";
import decodeXPValueDefault from "05147_decodeXPValue.js";
import _modDef5149 from "metro/05149__.js";
import _modDef5151 from "metro/05151__.js";
import getStringValueDefault from "05152_getStringValue.js";
import getStringValueDefault2 from "05153_getStringValue.js";
import _modDef5154 from "metro/05154__.js";
import _modDef5155 from "metro/05155__.js";
import getDataView from "05125_getDataView.js";

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5149);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5151, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5128.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5128.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5154;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5128.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5155;
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