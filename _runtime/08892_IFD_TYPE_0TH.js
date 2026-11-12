// === Module 8892: IFD_TYPE_0TH ===

// Module 8892 (IFD_TYPE_0TH)
import _modDef8874 from "module_8874" /* 8874 */;
import _modDef8895 from "module_8895" /* 8895 */;
import _modDef8897 from "module_8897" /* 8897 */;
import _modDef8898 from "module_8898" /* 8898 */;
import _modDef8899 from "module_8899" /* 8899 */;
import _modDef8900 from "module_8900" /* 8900 */;
import _modDef8901 from "module_8901" /* 8901 */;
import module_8871 from "module_8871" /* 8871 */;
import decodeXPValue from "decodeXPValue" /* 8893 */;

const objectAssignResult = module_8871.objectAssign({}, decodeXPValue, _modDef8895);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8897, interoperability: _modDef8898, mpf: null, canon: null, pentax: null };
if (_modDef8874.USE_MPF) {
  let importDefaultResult1 = _modDef8899;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8874.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8900;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8874.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8901;
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