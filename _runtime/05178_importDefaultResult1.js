// === Module 5178: importDefaultResult1 ===

// Module 5178 (importDefaultResult1)
import _modDef5160 from "module_5160" /* 5160 */;
import decodeXPValueDefault from "decodeXPValue" /* 5179 */;
import _modDef5181 from "module_5181" /* 5181 */;
import _modDef5183 from "module_5183" /* 5183 */;
import getStringValueDefault from "getStringValue" /* 5184 */;
import getStringValueDefault2 from "getStringValue" /* 5185 */;
import _modDef5186 from "module_5186" /* 5186 */;
import _modDef5187 from "module_5187" /* 5187 */;
import getDataView from "getDataView" /* 5157 */;

const objectAssignResult = getDataView.objectAssign({}, decodeXPValueDefault, _modDef5181);
const obj = { "0th": objectAssignResult, "1st": decodeXPValueDefault, exif: objectAssignResult, gps: _modDef5183, interoperability: getStringValueDefault, mpf: null, canon: null, pentax: null };
if (_modDef5160.USE_MPF) {
  let importDefaultResult1 = getStringValueDefault2;
} else {
  importDefaultResult1 = {};
}
obj[5] = importDefaultResult1;
if (_modDef5160.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5186;
} else {
  importDefaultResult2 = {};
}
obj[6] = importDefaultResult2;
if (_modDef5160.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5187;
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