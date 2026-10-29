// === Module 8289: IFD_TYPE_0TH ===

// Module 8289 (IFD_TYPE_0TH)
import _modDef8271 from "module_8271" /* 8271 */;
import _modDef8292 from "module_8292" /* 8292 */;
import _modDef8294 from "module_8294" /* 8294 */;
import _modDef8295 from "module_8295" /* 8295 */;
import _modDef8296 from "module_8296" /* 8296 */;
import _modDef8297 from "module_8297" /* 8297 */;
import _modDef8298 from "module_8298" /* 8298 */;
import module_8268 from "module_8268" /* 8268 */;
import decodeXPValue from "decodeXPValue" /* 8290 */;

const objectAssignResult = module_8268.objectAssign({}, decodeXPValue, _modDef8292);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8294, interoperability: _modDef8295, mpf: null, canon: null, pentax: null };
if (_modDef8271.USE_MPF) {
  let importDefaultResult1 = _modDef8296;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8271.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8297;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8271.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8298;
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