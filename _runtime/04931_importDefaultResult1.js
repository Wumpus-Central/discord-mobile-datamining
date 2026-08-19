// === Module 4931: importDefaultResult1 ===

// Module 4931 (importDefaultResult1)
import _modDef4913 from "module_4913" /* 4913 */;
import decodeXPValueDefault from "decodeXPValue" /* 4932 */;
import _modDef4934 from "module_4934" /* 4934 */;
import _modDef4936 from "module_4936" /* 4936 */;
import getStringValueDefault from "getStringValue" /* 4937 */;
import getStringValueDefault2 from "getStringValue" /* 4938 */;
import _modDef4939 from "module_4939" /* 4939 */;
import _modDef4940 from "module_4940" /* 4940 */;
import getDataView from "getDataView" /* 4910 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef4934);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef4936, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef4913.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef4913.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef4939;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef4913.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef4940;
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