// === Module 7366: IFD_TYPE_0TH ===

// Module 7366 (IFD_TYPE_0TH)
import _modDef7348 from "module_7348" /* 7348 */;
import _modDef7369 from "module_7369" /* 7369 */;
import _modDef7371 from "module_7371" /* 7371 */;
import _modDef7372 from "module_7372" /* 7372 */;
import _modDef7373 from "module_7373" /* 7373 */;
import _modDef7374 from "module_7374" /* 7374 */;
import _modDef7375 from "module_7375" /* 7375 */;
import module_7345 from "module_7345" /* 7345 */;
import module_7367 from "module_7367" /* 7367 */;

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_7345.objectAssign;
const objectAssignResult = objectAssign({}, module_7367, _modDef7369);
const obj = { "0th": objectAssignResult, "1st": module_7367, exif: objectAssignResult, gps: _modDef7371, interoperability: _modDef7372, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef7348.USE_MPF) {
  importDefaultResult1 = _modDef7373;
} else {
  importDefaultResult1 = {};
}
if (_modDef7348.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef7374;
} else {
  importDefaultResult2 = {};
}
if (_modDef7348.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef7375;
} else {
  importDefaultResult3 = {};
}

export default obj;
export const IFD_TYPE_0TH = "0th";
export const IFD_TYPE_1ST = "1st";
export const IFD_TYPE_EXIF = "exif";
export const IFD_TYPE_GPS = "gps";
export const IFD_TYPE_INTEROPERABILITY = "interoperability";
export const IFD_TYPE_MPF = "mpf";
export const IFD_TYPE_CANON = "canon";
export const IFD_TYPE_PENTAX = "pentax";