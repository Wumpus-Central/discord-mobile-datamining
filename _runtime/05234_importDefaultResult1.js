// === Module 5234: importDefaultResult1 ===

// Module 5234 (importDefaultResult1)
import _modDef5216 from "module_5216" /* 5216 */;
import decodeXPValueDefault from "decodeXPValue" /* 5235 */;
import _modDef5237 from "module_5237" /* 5237 */;
import _modDef5239 from "module_5239" /* 5239 */;
import getStringValueDefault from "getStringValue" /* 5240 */;
import getStringValueDefault2 from "getStringValue" /* 5241 */;
import _modDef5242 from "module_5242" /* 5242 */;
import _modDef5243 from "module_5243" /* 5243 */;
import getDataView from "getDataView" /* 5213 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5237);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5239, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
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