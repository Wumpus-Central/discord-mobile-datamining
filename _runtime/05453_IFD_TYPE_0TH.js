// === Module 5453: IFD_TYPE_0TH ===

// Module 5453 (IFD_TYPE_0TH)
import _modDef5435 from "module_5435" /* 5435 */;
import _modDef5456 from "module_5456" /* 5456 */;
import _modDef5458 from "module_5458" /* 5458 */;
import _modDef5459 from "module_5459" /* 5459 */;
import _modDef5460 from "module_5460" /* 5460 */;
import _modDef5461 from "module_5461" /* 5461 */;
import _modDef5462 from "module_5462" /* 5462 */;
import module_5432 from "module_5432" /* 5432 */;
import decodeXPValue from "decodeXPValue" /* 5454 */;

const objectAssignResult = module_5432.objectAssign({}, decodeXPValue, _modDef5456);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5458, interoperability: _modDef5459, mpf: null, canon: null, pentax: null };
if (_modDef5435.USE_MPF) {
  let importDefaultResult1 = _modDef5460;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5435.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5461;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5435.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5462;
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