// === Module 8374: IFD_TYPE_0TH ===

// Module 8374 (IFD_TYPE_0TH)
import _modDef8356 from "module_8356" /* 8356 */;
import _modDef8377 from "module_8377" /* 8377 */;
import _modDef8379 from "module_8379" /* 8379 */;
import _modDef8380 from "module_8380" /* 8380 */;
import _modDef8381 from "module_8381" /* 8381 */;
import _modDef8382 from "module_8382" /* 8382 */;
import _modDef8383 from "module_8383" /* 8383 */;
import module_8353 from "module_8353" /* 8353 */;
import decodeXPValue from "decodeXPValue" /* 8375 */;

const objectAssignResult = module_8353.objectAssign({}, decodeXPValue, _modDef8377);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8379, interoperability: _modDef8380, mpf: null, canon: null, pentax: null };
if (_modDef8356.USE_MPF) {
  let importDefaultResult1 = _modDef8381;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8356.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8382;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8356.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8383;
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