// === Module 5125: importDefaultResult1 ===

// Module 5125 (importDefaultResult1)
import _modDef5107 from "module_5107" /* 5107 */;
import decodeXPValueDefault from "decodeXPValue" /* 5126 */;
import _modDef5128 from "module_5128" /* 5128 */;
import _modDef5130 from "module_5130" /* 5130 */;
import getStringValueDefault from "getStringValue" /* 5131 */;
import getStringValueDefault2 from "getStringValue" /* 5132 */;
import _modDef5133 from "module_5133" /* 5133 */;
import _modDef5134 from "module_5134" /* 5134 */;
import getDataView from "getDataView" /* 5104 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5128);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5130, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5107.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5107.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5133;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5107.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5134;
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