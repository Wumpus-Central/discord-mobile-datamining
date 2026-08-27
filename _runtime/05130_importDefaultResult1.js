// === Module 5130: importDefaultResult1 ===

// Module 5130 (importDefaultResult1)
import _modDef5112 from "module_5112" /* 5112 */;
import decodeXPValueDefault from "decodeXPValue" /* 5131 */;
import _modDef5133 from "module_5133" /* 5133 */;
import _modDef5135 from "module_5135" /* 5135 */;
import getStringValueDefault from "getStringValue" /* 5136 */;
import getStringValueDefault2 from "getStringValue" /* 5137 */;
import _modDef5138 from "module_5138" /* 5138 */;
import _modDef5139 from "module_5139" /* 5139 */;
import getDataView from "getDataView" /* 5109 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5133);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5135, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5112.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5112.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5138;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5112.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5139;
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