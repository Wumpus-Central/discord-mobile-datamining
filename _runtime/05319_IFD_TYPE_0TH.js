// === Module 5319: IFD_TYPE_0TH ===

// Module 5319 (IFD_TYPE_0TH)
import _modDef5301 from "module_5301" /* 5301 */;
import _modDef5322 from "module_5322" /* 5322 */;
import _modDef5324 from "module_5324" /* 5324 */;
import _modDef5325 from "module_5325" /* 5325 */;
import _modDef5326 from "module_5326" /* 5326 */;
import _modDef5327 from "module_5327" /* 5327 */;
import _modDef5328 from "module_5328" /* 5328 */;
import module_5298 from "module_5298" /* 5298 */;
import decodeXPValue from "decodeXPValue" /* 5320 */;

const objectAssignResult = module_5298.objectAssign({}, decodeXPValue, _modDef5322);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5324, interoperability: _modDef5325, mpf: null, canon: null, pentax: null };
if (_modDef5301.USE_MPF) {
  let importDefaultResult1 = _modDef5326;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5301.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5327;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5301.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5328;
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