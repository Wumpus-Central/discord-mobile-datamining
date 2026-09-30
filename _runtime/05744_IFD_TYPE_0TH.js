// === Module 5744: IFD_TYPE_0TH ===

// Module 5744 (IFD_TYPE_0TH)
import _modDef5726 from "module_5726" /* 5726 */;
import _modDef5747 from "module_5747" /* 5747 */;
import _modDef5749 from "module_5749" /* 5749 */;
import _modDef5750 from "module_5750" /* 5750 */;
import _modDef5751 from "module_5751" /* 5751 */;
import _modDef5752 from "module_5752" /* 5752 */;
import _modDef5753 from "module_5753" /* 5753 */;
import module_5723 from "module_5723" /* 5723 */;
import decodeXPValue from "decodeXPValue" /* 5745 */;

const objectAssignResult = module_5723.objectAssign({}, decodeXPValue, _modDef5747);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5749, interoperability: _modDef5750, mpf: null, canon: null, pentax: null };
if (_modDef5726.USE_MPF) {
  let importDefaultResult1 = _modDef5751;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5726.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5752;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5726.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5753;
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