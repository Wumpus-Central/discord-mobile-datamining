// === Module 5320: IFD_TYPE_0TH ===

// Module 5320 (IFD_TYPE_0TH)
import _modDef5302 from "module_5302" /* 5302 */;
import _modDef5323 from "module_5323" /* 5323 */;
import _modDef5325 from "module_5325" /* 5325 */;
import _modDef5326 from "module_5326" /* 5326 */;
import _modDef5327 from "module_5327" /* 5327 */;
import _modDef5328 from "module_5328" /* 5328 */;
import _modDef5329 from "module_5329" /* 5329 */;
import module_5299 from "module_5299" /* 5299 */;
import decodeXPValue from "decodeXPValue" /* 5321 */;

const objectAssignResult = module_5299.objectAssign({}, decodeXPValue, _modDef5323);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5325, interoperability: _modDef5326, mpf: null, canon: null, pentax: null };
if (_modDef5302.USE_MPF) {
  let importDefaultResult1 = _modDef5327;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5302.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5328;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5302.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5329;
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