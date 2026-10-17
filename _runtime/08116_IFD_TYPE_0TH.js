// _runtime/08116_IFD_TYPE_0TH.js
import _modDef8098 from "metro/08098__.js";
import _modDef8119 from "metro/08119__.js";
import _modDef8121 from "metro/08121__.js";
import _modDef8122 from "metro/08122__.js";
import _modDef8123 from "metro/08123__.js";
import _modDef8124 from "metro/08124__.js";
import _modDef8125 from "metro/08125__.js";
import 08095__ from "metro/08095__.js";
import decodeXPValue from "08117_decodeXPValue.js";

const objectAssignResult = module_8095.objectAssign({}, decodeXPValue, _modDef8119);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8121, interoperability: _modDef8122, mpf: null, canon: null, pentax: null };
if (_modDef8098.USE_MPF) {
  let importDefaultResult1 = _modDef8123;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8098.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8124;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8098.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8125;
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