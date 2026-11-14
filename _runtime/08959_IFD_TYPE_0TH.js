// === Module 8959: IFD_TYPE_0TH ===

// Module 8959 (IFD_TYPE_0TH)
import _modDef8941 from "module_8941" /* 8941 */;
import _modDef8962 from "module_8962" /* 8962 */;
import _modDef8964 from "module_8964" /* 8964 */;
import _modDef8965 from "module_8965" /* 8965 */;
import _modDef8966 from "module_8966" /* 8966 */;
import _modDef8967 from "module_8967" /* 8967 */;
import _modDef8968 from "module_8968" /* 8968 */;
import module_8938 from "module_8938" /* 8938 */;
import decodeXPValue from "decodeXPValue" /* 8960 */;

const objectAssignResult = module_8938.objectAssign({}, decodeXPValue, _modDef8962);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8964, interoperability: _modDef8965, mpf: null, canon: null, pentax: null };
if (_modDef8941.USE_MPF) {
  let importDefaultResult1 = _modDef8966;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8941.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8967;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8941.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8968;
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