// === Module 5187: importDefaultResult1 ===

// Module 5187 (importDefaultResult1)
import _modDef5169 from "module_5169" /* 5169 */;
import decodeXPValueDefault from "decodeXPValue" /* 5188 */;
import _modDef5190 from "module_5190" /* 5190 */;
import _modDef5192 from "module_5192" /* 5192 */;
import getStringValueDefault from "getStringValue" /* 5193 */;
import getStringValueDefault2 from "getStringValue" /* 5194 */;
import _modDef5195 from "module_5195" /* 5195 */;
import _modDef5196 from "module_5196" /* 5196 */;
import getDataView from "getDataView" /* 5166 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5190);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5192, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
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