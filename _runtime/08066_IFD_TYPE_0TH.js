// _runtime/08066_IFD_TYPE_0TH.js
import _modDef8048 from "metro/08048__.js";
import _modDef8069 from "metro/08069__.js";
import _modDef8071 from "metro/08071__.js";
import _modDef8072 from "metro/08072__.js";
import _modDef8073 from "metro/08073__.js";
import _modDef8074 from "metro/08074__.js";
import _modDef8075 from "metro/08075__.js";
import 08045__ from "metro/08045__.js";
import decodeXPValue from "08067_decodeXPValue.js";

const objectAssignResult = module_8045.objectAssign({}, decodeXPValue, _modDef8069);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8071, interoperability: _modDef8072, mpf: null, canon: null, pentax: null };
if (_modDef8048.USE_MPF) {
  let importDefaultResult1 = _modDef8073;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8048.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8074;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8048.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8075;
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