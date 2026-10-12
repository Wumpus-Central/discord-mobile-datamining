// === Module 7849: IFD_TYPE_0TH ===

// Module 7849 (IFD_TYPE_0TH)
import _modDef7831 from "module_7831" /* 7831 */;
import _modDef7852 from "module_7852" /* 7852 */;
import _modDef7854 from "module_7854" /* 7854 */;
import _modDef7855 from "module_7855" /* 7855 */;
import _modDef7856 from "module_7856" /* 7856 */;
import _modDef7857 from "module_7857" /* 7857 */;
import _modDef7858 from "module_7858" /* 7858 */;
import module_7828 from "module_7828" /* 7828 */;
import decodeXPValue from "decodeXPValue" /* 7850 */;

const objectAssignResult = module_7828.objectAssign({}, decodeXPValue, _modDef7852);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7854, interoperability: _modDef7855, mpf: null, canon: null, pentax: null };
if (_modDef7831.USE_MPF) {
  let importDefaultResult1 = _modDef7856;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7831.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7857;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7831.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7858;
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