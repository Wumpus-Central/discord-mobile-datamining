// === Module 5733: IFD_TYPE_0TH ===

// Module 5733 (IFD_TYPE_0TH)
import _modDef5715 from "module_5715" /* 5715 */;
import _modDef5736 from "module_5736" /* 5736 */;
import _modDef5738 from "module_5738" /* 5738 */;
import _modDef5739 from "module_5739" /* 5739 */;
import _modDef5740 from "module_5740" /* 5740 */;
import _modDef5741 from "module_5741" /* 5741 */;
import _modDef5742 from "module_5742" /* 5742 */;
import module_5712 from "module_5712" /* 5712 */;
import decodeXPValue from "decodeXPValue" /* 5734 */;

const objectAssignResult = module_5712.objectAssign({}, decodeXPValue, _modDef5736);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5738, interoperability: _modDef5739, mpf: null, canon: null, pentax: null };
if (_modDef5715.USE_MPF) {
  let importDefaultResult1 = _modDef5740;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5715.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5741;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5715.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5742;
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