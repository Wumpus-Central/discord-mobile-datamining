// _runtime/05234_IFD_TYPE_0TH.js
import _modDef5216 from "metro/05216__.js";
import _modDef5237 from "metro/05237__.js";
import _modDef5239 from "metro/05239__.js";
import _modDef5240 from "metro/05240__.js";
import _modDef5241 from "metro/05241__.js";
import _modDef5242 from "metro/05242__.js";
import _modDef5243 from "metro/05243__.js";
import 05213__ from "metro/05213__.js";
import decodeXPValue from "05235_decodeXPValue.js";

const objectAssignResult = module_5213.objectAssign({}, decodeXPValue, _modDef5237);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5239, interoperability: _modDef5240, mpf: null, canon: null, pentax: null };
if (_modDef5216.USE_MPF) {
  let importDefaultResult1 = _modDef5241;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5216.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5242;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5216.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5243;
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