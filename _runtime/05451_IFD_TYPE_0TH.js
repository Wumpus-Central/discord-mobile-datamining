// === Module 5451: IFD_TYPE_0TH ===

// Module 5451 (IFD_TYPE_0TH)
import _modDef5433 from "module_5433" /* 5433 */;
import _modDef5454 from "module_5454" /* 5454 */;
import _modDef5456 from "module_5456" /* 5456 */;
import _modDef5457 from "module_5457" /* 5457 */;
import _modDef5458 from "module_5458" /* 5458 */;
import _modDef5459 from "module_5459" /* 5459 */;
import _modDef5460 from "module_5460" /* 5460 */;
import module_5430 from "module_5430" /* 5430 */;
import decodeXPValue from "decodeXPValue" /* 5452 */;

const objectAssignResult = module_5430.objectAssign({}, decodeXPValue, _modDef5454);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5456, interoperability: _modDef5457, mpf: null, canon: null, pentax: null };
if (_modDef5433.USE_MPF) {
  let importDefaultResult1 = _modDef5458;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5433.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5459;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5433.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5460;
} else {
  importDefaultResult3 = {};
}
obj.pentax = importDefaultResult3;

export default obj;
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";