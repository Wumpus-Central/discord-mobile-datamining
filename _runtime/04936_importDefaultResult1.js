// === Module 4936: importDefaultResult1 ===

// Module 4936 (importDefaultResult1)
import _modDef4918 from "module_4918" /* 4918 */;
import decodeXPValueDefault from "decodeXPValue" /* 4937 */;
import _modDef4939 from "module_4939" /* 4939 */;
import _modDef4941 from "module_4941" /* 4941 */;
import getStringValueDefault from "getStringValue" /* 4942 */;
import getStringValueDefault2 from "getStringValue" /* 4943 */;
import _modDef4944 from "module_4944" /* 4944 */;
import _modDef4945 from "module_4945" /* 4945 */;
import getDataView from "getDataView" /* 4915 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef4939);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef4941, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef4918.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef4918.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef4944;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef4918.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef4945;
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