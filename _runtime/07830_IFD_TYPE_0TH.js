// === Module 7830: IFD_TYPE_0TH ===

// Module 7830 (IFD_TYPE_0TH)
import _modDef7812 from "module_7812" /* 7812 */;
import _modDef7833 from "module_7833" /* 7833 */;
import _modDef7835 from "module_7835" /* 7835 */;
import _modDef7836 from "module_7836" /* 7836 */;
import _modDef7837 from "module_7837" /* 7837 */;
import _modDef7838 from "module_7838" /* 7838 */;
import _modDef7839 from "module_7839" /* 7839 */;
import module_7809 from "module_7809" /* 7809 */;
import decodeXPValue from "decodeXPValue" /* 7831 */;

const objectAssignResult = module_7809.objectAssign({}, decodeXPValue, _modDef7833);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7835, interoperability: _modDef7836, mpf: null, canon: null, pentax: null };
if (_modDef7812.USE_MPF) {
  let importDefaultResult1 = _modDef7837;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7812.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7838;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7812.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7839;
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