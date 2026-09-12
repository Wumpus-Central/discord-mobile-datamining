// === Module 5315: IFD_TYPE_0TH ===

// Module 5315 (IFD_TYPE_0TH)
import _modDef5297 from "module_5297" /* 5297 */;
import _modDef5318 from "module_5318" /* 5318 */;
import _modDef5320 from "module_5320" /* 5320 */;
import _modDef5321 from "module_5321" /* 5321 */;
import _modDef5322 from "module_5322" /* 5322 */;
import _modDef5323 from "module_5323" /* 5323 */;
import _modDef5324 from "module_5324" /* 5324 */;
import module_5294 from "module_5294" /* 5294 */;
import decodeXPValue from "decodeXPValue" /* 5316 */;

const objectAssignResult = module_5294.objectAssign({}, decodeXPValue, _modDef5318);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5320, interoperability: _modDef5321, mpf: null, canon: null, pentax: null };
if (_modDef5297.USE_MPF) {
  let importDefaultResult1 = _modDef5322;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5297.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5323;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5297.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5324;
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