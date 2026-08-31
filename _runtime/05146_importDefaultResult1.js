// === Module 5146: importDefaultResult1 ===

// Module 5146 (importDefaultResult1)
import _modDef5128 from "module_5128" /* 5128 */;
import decodeXPValueDefault from "decodeXPValue" /* 5147 */;
import _modDef5149 from "module_5149" /* 5149 */;
import _modDef5151 from "module_5151" /* 5151 */;
import getStringValueDefault from "getStringValue" /* 5152 */;
import getStringValueDefault2 from "getStringValue" /* 5153 */;
import _modDef5154 from "module_5154" /* 5154 */;
import _modDef5155 from "module_5155" /* 5155 */;
import getDataView from "getDataView" /* 5125 */;

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