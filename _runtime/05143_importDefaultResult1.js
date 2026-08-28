// === Module 5143: importDefaultResult1 ===

// Module 5143 (importDefaultResult1)
import _modDef5125 from "module_5125" /* 5125 */;
import decodeXPValueDefault from "decodeXPValue" /* 5144 */;
import _modDef5146 from "module_5146" /* 5146 */;
import _modDef5148 from "module_5148" /* 5148 */;
import getStringValueDefault from "getStringValue" /* 5149 */;
import getStringValueDefault2 from "getStringValue" /* 5150 */;
import _modDef5151 from "module_5151" /* 5151 */;
import _modDef5152 from "module_5152" /* 5152 */;
import getDataView from "getDataView" /* 5122 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5146);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5148, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5125.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5125.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5151;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5125.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5152;
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