// === Module 8893: IFD_TYPE_0TH ===

// Module 8893 (IFD_TYPE_0TH)
import _modDef8875 from "module_8875" /* 8875 */;
import _modDef8896 from "module_8896" /* 8896 */;
import _modDef8898 from "module_8898" /* 8898 */;
import _modDef8899 from "module_8899" /* 8899 */;
import _modDef8900 from "module_8900" /* 8900 */;
import _modDef8901 from "module_8901" /* 8901 */;
import _modDef8902 from "module_8902" /* 8902 */;
import module_8872 from "module_8872" /* 8872 */;
import decodeXPValue from "decodeXPValue" /* 8894 */;

const objectAssignResult = module_8872.objectAssign({}, decodeXPValue, _modDef8896);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8898, interoperability: _modDef8899, mpf: null, canon: null, pentax: null };
if (_modDef8875.USE_MPF) {
  let importDefaultResult1 = _modDef8900;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8875.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8901;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8875.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8902;
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