// === Module 7848: IFD_TYPE_0TH ===

// Module 7848 (IFD_TYPE_0TH)
import _modDef7830 from "module_7830" /* 7830 */;
import _modDef7851 from "module_7851" /* 7851 */;
import _modDef7853 from "module_7853" /* 7853 */;
import _modDef7854 from "module_7854" /* 7854 */;
import _modDef7855 from "module_7855" /* 7855 */;
import _modDef7856 from "module_7856" /* 7856 */;
import _modDef7857 from "module_7857" /* 7857 */;
import module_7827 from "module_7827" /* 7827 */;
import decodeXPValue from "decodeXPValue" /* 7849 */;

const objectAssignResult = module_7827.objectAssign({}, decodeXPValue, _modDef7851);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7853, interoperability: _modDef7854, mpf: null, canon: null, pentax: null };
if (_modDef7830.USE_MPF) {
  let importDefaultResult1 = _modDef7855;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7830.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7856;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7830.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7857;
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