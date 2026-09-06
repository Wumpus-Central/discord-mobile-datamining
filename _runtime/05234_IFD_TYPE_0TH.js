// === Module 5234: IFD_TYPE_0TH ===

// Module 5234 (IFD_TYPE_0TH)
import _modDef5216 from "module_5216" /* 5216 */;
import _modDef5237 from "module_5237" /* 5237 */;
import _modDef5239 from "module_5239" /* 5239 */;
import _modDef5240 from "module_5240" /* 5240 */;
import _modDef5241 from "module_5241" /* 5241 */;
import _modDef5242 from "module_5242" /* 5242 */;
import _modDef5243 from "module_5243" /* 5243 */;
import module_5213 from "module_5213" /* 5213 */;
import decodeXPValue from "decodeXPValue" /* 5235 */;

const objectAssignResult = module_5213.objectAssign({}, decodeXPValue, _modDef5237);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5239, interoperability: _modDef5240, mpf: null, canon: null, pentax: null };
if (_modDef5216.USE_MPF) {
  let importDefaultResult1 = _modDef5241;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5216.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5242;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5216.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5243;
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