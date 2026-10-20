// === Module 8183: IFD_TYPE_0TH ===

// Module 8183 (IFD_TYPE_0TH)
import _modDef8165 from "module_8165" /* 8165 */;
import _modDef8186 from "module_8186" /* 8186 */;
import _modDef8188 from "module_8188" /* 8188 */;
import _modDef8189 from "module_8189" /* 8189 */;
import _modDef8190 from "module_8190" /* 8190 */;
import _modDef8191 from "module_8191" /* 8191 */;
import _modDef8192 from "module_8192" /* 8192 */;
import module_8162 from "module_8162" /* 8162 */;
import decodeXPValue from "decodeXPValue" /* 8184 */;

const objectAssignResult = module_8162.objectAssign({}, decodeXPValue, _modDef8186);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8188, interoperability: _modDef8189, mpf: null, canon: null, pentax: null };
if (_modDef8165.USE_MPF) {
  let importDefaultResult1 = _modDef8190;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8165.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8191;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8165.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8192;
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