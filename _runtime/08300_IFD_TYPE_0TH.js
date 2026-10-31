// === Module 8300: IFD_TYPE_0TH ===

// Module 8300 (IFD_TYPE_0TH)
import _modDef8282 from "module_8282" /* 8282 */;
import _modDef8303 from "module_8303" /* 8303 */;
import _modDef8305 from "module_8305" /* 8305 */;
import _modDef8306 from "module_8306" /* 8306 */;
import _modDef8307 from "module_8307" /* 8307 */;
import _modDef8308 from "module_8308" /* 8308 */;
import _modDef8309 from "module_8309" /* 8309 */;
import module_8279 from "module_8279" /* 8279 */;
import decodeXPValue from "decodeXPValue" /* 8301 */;

const objectAssignResult = module_8279.objectAssign({}, decodeXPValue, _modDef8303);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8305, interoperability: _modDef8306, mpf: null, canon: null, pentax: null };
if (_modDef8282.USE_MPF) {
  let importDefaultResult1 = _modDef8307;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8282.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8308;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8282.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8309;
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