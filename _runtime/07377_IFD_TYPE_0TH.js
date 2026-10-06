// _runtime/07377_IFD_TYPE_0TH.js
import _modDef7359 from "metro/07359__.js";
import _modDef7380 from "metro/07380__.js";
import _modDef7382 from "metro/07382__.js";
import _modDef7383 from "metro/07383__.js";
import _modDef7384 from "metro/07384__.js";
import _modDef7385 from "metro/07385__.js";
import _modDef7386 from "metro/07386__.js";
import 07356__ from "metro/07356__.js";
import 07378__ from "metro/07378__.js";

let importDefaultResult1;
let importDefaultResult2;
let importDefaultResult3;
const objectAssign = module_7356.objectAssign;
const objectAssignResult = objectAssign({}, module_7378, _modDef7380);
const obj = { "0th": objectAssignResult, "1st": module_7378, exif: objectAssignResult, gps: _modDef7382, interoperability: _modDef7383, mpf: importDefaultResult1, canon: importDefaultResult2, pentax: importDefaultResult3 };
if (_modDef7359.USE_MPF) {
  importDefaultResult1 = _modDef7384;
} else {
  importDefaultResult1 = {};
}
if (_modDef7359.USE_MAKER_NOTES) {
  importDefaultResult2 = _modDef7385;
} else {
  importDefaultResult2 = {};
}
if (_modDef7359.USE_MAKER_NOTES) {
  importDefaultResult3 = _modDef7386;
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