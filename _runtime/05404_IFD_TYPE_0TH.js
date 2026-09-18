// === Module 5404: IFD_TYPE_0TH ===

// Module 5404 (IFD_TYPE_0TH)
import _modDef5386 from "module_5386" /* 5386 */;
import _modDef5407 from "module_5407" /* 5407 */;
import _modDef5409 from "module_5409" /* 5409 */;
import _modDef5410 from "module_5410" /* 5410 */;
import _modDef5411 from "module_5411" /* 5411 */;
import _modDef5412 from "module_5412" /* 5412 */;
import _modDef5413 from "module_5413" /* 5413 */;
import module_5383 from "module_5383" /* 5383 */;
import decodeXPValue from "decodeXPValue" /* 5405 */;

const objectAssignResult = module_5383.objectAssign({}, decodeXPValue, _modDef5407);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5409, interoperability: _modDef5410, mpf: null, canon: null, pentax: null };
if (_modDef5386.USE_MPF) {
  let importDefaultResult1 = _modDef5411;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5386.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5412;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5386.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5413;
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