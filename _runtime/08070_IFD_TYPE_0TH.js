// === Module 8070: IFD_TYPE_0TH ===

// Module 8070 (IFD_TYPE_0TH)
import _modDef8052 from "module_8052" /* 8052 */;
import _modDef8073 from "module_8073" /* 8073 */;
import _modDef8075 from "module_8075" /* 8075 */;
import _modDef8076 from "module_8076" /* 8076 */;
import _modDef8077 from "module_8077" /* 8077 */;
import _modDef8078 from "module_8078" /* 8078 */;
import _modDef8079 from "module_8079" /* 8079 */;
import module_8049 from "module_8049" /* 8049 */;
import decodeXPValue from "decodeXPValue" /* 8071 */;

const objectAssignResult = module_8049.objectAssign({}, decodeXPValue, _modDef8073);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8075, interoperability: _modDef8076, mpf: null, canon: null, pentax: null };
if (_modDef8052.USE_MPF) {
  let importDefaultResult1 = _modDef8077;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8052.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8078;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8052.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8079;
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