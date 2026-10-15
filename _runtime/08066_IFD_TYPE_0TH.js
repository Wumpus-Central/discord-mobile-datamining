// === Module 8066: IFD_TYPE_0TH ===

// Module 8066 (IFD_TYPE_0TH)
import _modDef8048 from "module_8048" /* 8048 */;
import _modDef8069 from "module_8069" /* 8069 */;
import _modDef8071 from "module_8071" /* 8071 */;
import _modDef8072 from "module_8072" /* 8072 */;
import _modDef8073 from "module_8073" /* 8073 */;
import _modDef8074 from "module_8074" /* 8074 */;
import _modDef8075 from "module_8075" /* 8075 */;
import module_8045 from "module_8045" /* 8045 */;
import decodeXPValue from "decodeXPValue" /* 8067 */;

const objectAssignResult = module_8045.objectAssign({}, decodeXPValue, _modDef8069);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8071, interoperability: _modDef8072, mpf: null, canon: null, pentax: null };
if (_modDef8048.USE_MPF) {
  let importDefaultResult1 = _modDef8073;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8048.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8074;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8048.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8075;
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