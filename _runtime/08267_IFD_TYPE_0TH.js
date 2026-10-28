// === Module 8267: IFD_TYPE_0TH ===

// Module 8267 (IFD_TYPE_0TH)
import _modDef8249 from "module_8249" /* 8249 */;
import _modDef8270 from "module_8270" /* 8270 */;
import _modDef8272 from "module_8272" /* 8272 */;
import _modDef8273 from "module_8273" /* 8273 */;
import _modDef8274 from "module_8274" /* 8274 */;
import _modDef8275 from "module_8275" /* 8275 */;
import _modDef8276 from "module_8276" /* 8276 */;
import module_8246 from "module_8246" /* 8246 */;
import decodeXPValue from "decodeXPValue" /* 8268 */;

const objectAssignResult = module_8246.objectAssign({}, decodeXPValue, _modDef8270);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8272, interoperability: _modDef8273, mpf: null, canon: null, pentax: null };
if (_modDef8249.USE_MPF) {
  let importDefaultResult1 = _modDef8274;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8249.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8275;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8249.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8276;
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