// === Module 8221: IFD_TYPE_0TH ===

// Module 8221 (IFD_TYPE_0TH)
import _modDef8203 from "module_8203" /* 8203 */;
import _modDef8224 from "module_8224" /* 8224 */;
import _modDef8226 from "module_8226" /* 8226 */;
import _modDef8227 from "module_8227" /* 8227 */;
import _modDef8228 from "module_8228" /* 8228 */;
import _modDef8229 from "module_8229" /* 8229 */;
import _modDef8230 from "module_8230" /* 8230 */;
import module_8200 from "module_8200" /* 8200 */;
import decodeXPValue from "decodeXPValue" /* 8222 */;

const objectAssignResult = module_8200.objectAssign({}, decodeXPValue, _modDef8224);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8226, interoperability: _modDef8227, mpf: null, canon: null, pentax: null };
if (_modDef8203.USE_MPF) {
  let importDefaultResult1 = _modDef8228;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8203.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8229;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8203.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8230;
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