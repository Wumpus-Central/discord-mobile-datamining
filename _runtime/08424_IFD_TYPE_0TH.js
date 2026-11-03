// === Module 8424: IFD_TYPE_0TH ===

// Module 8424 (IFD_TYPE_0TH)
import _modDef8406 from "module_8406" /* 8406 */;
import _modDef8427 from "module_8427" /* 8427 */;
import _modDef8429 from "module_8429" /* 8429 */;
import _modDef8430 from "module_8430" /* 8430 */;
import _modDef8431 from "module_8431" /* 8431 */;
import _modDef8432 from "module_8432" /* 8432 */;
import _modDef8433 from "module_8433" /* 8433 */;
import module_8403 from "module_8403" /* 8403 */;
import decodeXPValue from "decodeXPValue" /* 8425 */;

const objectAssignResult = module_8403.objectAssign({}, decodeXPValue, _modDef8427);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8429, interoperability: _modDef8430, mpf: null, canon: null, pentax: null };
if (_modDef8406.USE_MPF) {
  let importDefaultResult1 = _modDef8431;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8406.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8432;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8406.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8433;
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