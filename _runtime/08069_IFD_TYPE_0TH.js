// === Module 8069: IFD_TYPE_0TH ===

// Module 8069 (IFD_TYPE_0TH)
import _modDef8051 from "module_8051" /* 8051 */;
import _modDef8072 from "module_8072" /* 8072 */;
import _modDef8074 from "module_8074" /* 8074 */;
import _modDef8075 from "module_8075" /* 8075 */;
import _modDef8076 from "module_8076" /* 8076 */;
import _modDef8077 from "module_8077" /* 8077 */;
import _modDef8078 from "module_8078" /* 8078 */;
import module_8048 from "module_8048" /* 8048 */;
import decodeXPValue from "decodeXPValue" /* 8070 */;

const objectAssignResult = module_8048.objectAssign({}, decodeXPValue, _modDef8072);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8074, interoperability: _modDef8075, mpf: null, canon: null, pentax: null };
if (_modDef8051.USE_MPF) {
  let importDefaultResult1 = _modDef8076;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8051.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8077;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8051.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8078;
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