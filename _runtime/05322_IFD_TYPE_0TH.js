// === Module 5322: IFD_TYPE_0TH ===

// Module 5322 (IFD_TYPE_0TH)
import _modDef5304 from "module_5304" /* 5304 */;
import _modDef5325 from "module_5325" /* 5325 */;
import _modDef5327 from "module_5327" /* 5327 */;
import _modDef5328 from "module_5328" /* 5328 */;
import _modDef5329 from "module_5329" /* 5329 */;
import _modDef5330 from "module_5330" /* 5330 */;
import _modDef5331 from "module_5331" /* 5331 */;
import module_5301 from "module_5301" /* 5301 */;
import decodeXPValue from "decodeXPValue" /* 5323 */;

const objectAssignResult = module_5301.objectAssign({}, decodeXPValue, _modDef5325);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5327, interoperability: _modDef5328, mpf: null, canon: null, pentax: null };
if (_modDef5304.USE_MPF) {
  let importDefaultResult1 = _modDef5329;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5304.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5330;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5304.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5331;
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