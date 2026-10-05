// _runtime/07366_IFD_TYPE_0TH.js
import _modDef7348 from "metro/07348__.js";
import _modDef7369 from "metro/07369__.js";
import _modDef7371 from "metro/07371__.js";
import _modDef7372 from "metro/07372__.js";
import _modDef7373 from "metro/07373__.js";
import _modDef7374 from "metro/07374__.js";
import _modDef7375 from "metro/07375__.js";
import 07345__ from "metro/07345__.js";
import 07367__ from "metro/07367__.js";

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