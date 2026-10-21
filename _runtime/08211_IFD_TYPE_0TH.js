// _runtime/08211_IFD_TYPE_0TH.js
import _modDef8193 from "metro/08193__.js";
import _modDef8214 from "metro/08214__.js";
import _modDef8216 from "metro/08216__.js";
import _modDef8217 from "metro/08217__.js";
import _modDef8218 from "metro/08218__.js";
import _modDef8219 from "metro/08219__.js";
import _modDef8220 from "metro/08220__.js";
import 08190__ from "metro/08190__.js";
import decodeXPValue from "08212_decodeXPValue.js";

const objectAssignResult = module_8190.objectAssign({}, decodeXPValue, _modDef8214);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8216, interoperability: _modDef8217, mpf: null, canon: null, pentax: null };
if (_modDef8193.USE_MPF) {
  let importDefaultResult1 = _modDef8218;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8193.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8219;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8193.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8220;
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