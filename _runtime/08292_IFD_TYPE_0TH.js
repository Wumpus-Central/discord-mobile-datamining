// === Module 8292: IFD_TYPE_0TH ===

// Module 8292 (IFD_TYPE_0TH)
import _modDef8274 from "module_8274" /* 8274 */;
import _modDef8295 from "module_8295" /* 8295 */;
import _modDef8297 from "module_8297" /* 8297 */;
import _modDef8298 from "module_8298" /* 8298 */;
import _modDef8299 from "module_8299" /* 8299 */;
import _modDef8300 from "module_8300" /* 8300 */;
import _modDef8301 from "module_8301" /* 8301 */;
import module_8271 from "module_8271" /* 8271 */;
import decodeXPValue from "decodeXPValue" /* 8293 */;

const objectAssignResult = module_8271.objectAssign({}, decodeXPValue, _modDef8295);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8297, interoperability: _modDef8298, mpf: null, canon: null, pentax: null };
if (_modDef8274.USE_MPF) {
  let importDefaultResult1 = _modDef8299;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8274.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8300;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8274.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8301;
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