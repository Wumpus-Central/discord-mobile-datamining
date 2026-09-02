// === Module 5186: importDefaultResult1 ===

// Module 5186 (importDefaultResult1)
import _modDef5168 from "module_5168" /* 5168 */;
import decodeXPValueDefault from "decodeXPValue" /* 5187 */;
import _modDef5189 from "module_5189" /* 5189 */;
import _modDef5191 from "module_5191" /* 5191 */;
import getStringValueDefault from "getStringValue" /* 5192 */;
import getStringValueDefault2 from "getStringValue" /* 5193 */;
import _modDef5194 from "module_5194" /* 5194 */;
import _modDef5195 from "module_5195" /* 5195 */;
import getDataView from "getDataView" /* 5165 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5189);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5191, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
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