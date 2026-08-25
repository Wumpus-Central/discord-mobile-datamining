// === Module 5059: importDefaultResult1 ===

// Module 5059 (importDefaultResult1)
import _modDef5041 from "module_5041" /* 5041 */;
import decodeXPValueDefault from "decodeXPValue" /* 5060 */;
import _modDef5062 from "module_5062" /* 5062 */;
import _modDef5064 from "module_5064" /* 5064 */;
import getStringValueDefault from "getStringValue" /* 5065 */;
import getStringValueDefault2 from "getStringValue" /* 5066 */;
import _modDef5067 from "module_5067" /* 5067 */;
import _modDef5068 from "module_5068" /* 5068 */;
import getDataView from "getDataView" /* 5038 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5062);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5064, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5041.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5041.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5067;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5041.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5068;
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