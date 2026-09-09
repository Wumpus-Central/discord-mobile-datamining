// === Module 5248: IFD_TYPE_0TH ===

// Module 5248 (IFD_TYPE_0TH)
import _modDef5230 from "module_5230" /* 5230 */;
import _modDef5251 from "module_5251" /* 5251 */;
import _modDef5253 from "module_5253" /* 5253 */;
import _modDef5254 from "module_5254" /* 5254 */;
import _modDef5255 from "module_5255" /* 5255 */;
import _modDef5256 from "module_5256" /* 5256 */;
import _modDef5257 from "module_5257" /* 5257 */;
import module_5227 from "module_5227" /* 5227 */;
import decodeXPValue from "decodeXPValue" /* 5249 */;

const objectAssignResult = module_5227.objectAssign({}, decodeXPValue, _modDef5251);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5253, interoperability: _modDef5254, mpf: null, canon: null, pentax: null };
if (_modDef5230.USE_MPF) {
  let importDefaultResult1 = _modDef5255;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5230.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5256;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5230.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5257;
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