// _runtime/05319_IFD_TYPE_0TH.js
import _modDef5301 from "metro/05301__.js";
import _modDef5322 from "metro/05322__.js";
import _modDef5324 from "metro/05324__.js";
import _modDef5325 from "metro/05325__.js";
import _modDef5326 from "metro/05326__.js";
import _modDef5327 from "metro/05327__.js";
import _modDef5328 from "metro/05328__.js";
import 05298__ from "metro/05298__.js";
import decodeXPValue from "05320_decodeXPValue.js";

const objectAssignResult = module_5298.objectAssign({}, decodeXPValue, _modDef5322);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5324, interoperability: _modDef5325, mpf: null, canon: null, pentax: null };
if (_modDef5301.USE_MPF) {
  let importDefaultResult1 = _modDef5326;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5301.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5327;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5301.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5328;
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