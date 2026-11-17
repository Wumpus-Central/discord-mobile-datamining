// === Module 8970: IFD_TYPE_0TH ===

// Module 8970 (IFD_TYPE_0TH)
import _modDef8952 from "module_8952" /* 8952 */;
import _modDef8973 from "module_8973" /* 8973 */;
import _modDef8975 from "module_8975" /* 8975 */;
import _modDef8976 from "module_8976" /* 8976 */;
import _modDef8977 from "module_8977" /* 8977 */;
import _modDef8978 from "module_8978" /* 8978 */;
import _modDef8979 from "module_8979" /* 8979 */;
import module_8949 from "module_8949" /* 8949 */;
import decodeXPValue from "decodeXPValue" /* 8971 */;

const objectAssignResult = module_8949.objectAssign({}, decodeXPValue, _modDef8973);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8975, interoperability: _modDef8976, mpf: null, canon: null, pentax: null };
if (_modDef8952.USE_MPF) {
  let importDefaultResult1 = _modDef8977;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8952.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8978;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8952.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8979;
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