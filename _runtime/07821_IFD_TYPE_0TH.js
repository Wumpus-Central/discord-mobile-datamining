// === Module 7821: IFD_TYPE_0TH ===

// Module 7821 (IFD_TYPE_0TH)
import _modDef7803 from "module_7803" /* 7803 */;
import _modDef7824 from "module_7824" /* 7824 */;
import _modDef7826 from "module_7826" /* 7826 */;
import _modDef7827 from "module_7827" /* 7827 */;
import _modDef7828 from "module_7828" /* 7828 */;
import _modDef7829 from "module_7829" /* 7829 */;
import _modDef7830 from "module_7830" /* 7830 */;
import module_7800 from "module_7800" /* 7800 */;
import decodeXPValue from "decodeXPValue" /* 7822 */;

const objectAssignResult = module_7800.objectAssign({}, decodeXPValue, _modDef7824);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7826, interoperability: _modDef7827, mpf: null, canon: null, pentax: null };
if (_modDef7803.USE_MPF) {
  let importDefaultResult1 = _modDef7828;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7803.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7829;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7803.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7830;
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