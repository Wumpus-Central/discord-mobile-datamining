// === Module 5284: IFD_TYPE_0TH ===

// Module 5284 (IFD_TYPE_0TH)
import _modDef5266 from "module_5266" /* 5266 */;
import _modDef5287 from "module_5287" /* 5287 */;
import _modDef5289 from "module_5289" /* 5289 */;
import _modDef5290 from "module_5290" /* 5290 */;
import _modDef5291 from "module_5291" /* 5291 */;
import _modDef5292 from "module_5292" /* 5292 */;
import _modDef5293 from "module_5293" /* 5293 */;
import module_5263 from "module_5263" /* 5263 */;
import decodeXPValue from "decodeXPValue" /* 5285 */;

const objectAssignResult = module_5263.objectAssign({}, decodeXPValue, _modDef5287);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5289, interoperability: _modDef5290, mpf: null, canon: null, pentax: null };
if (_modDef5266.USE_MPF) {
  let importDefaultResult1 = _modDef5291;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5266.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5292;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5266.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5293;
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