// === Module 7377: IFD_TYPE_0TH ===

// Module 7377 (IFD_TYPE_0TH)
import _modDef7359 from "module_7359" /* 7359 */;
import _modDef7380 from "module_7380" /* 7380 */;
import _modDef7382 from "module_7382" /* 7382 */;
import _modDef7383 from "module_7383" /* 7383 */;
import _modDef7384 from "module_7384" /* 7384 */;
import _modDef7385 from "module_7385" /* 7385 */;
import _modDef7386 from "module_7386" /* 7386 */;
import module_7356 from "module_7356" /* 7356 */;
import decodeXPValue from "decodeXPValue" /* 7378 */;

const objectAssignResult = module_7356.objectAssign({}, decodeXPValue, _modDef7380);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7382, interoperability: _modDef7383, mpf: null, canon: null, pentax: null };
if (_modDef7359.USE_MPF) {
  let importDefaultResult1 = _modDef7384;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7359.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7385;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7359.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7386;
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