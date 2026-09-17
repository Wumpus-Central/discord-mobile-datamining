// _runtime/05322_IFD_TYPE_0TH.js
import _modDef5304 from "metro/05304__.js";
import _modDef5325 from "metro/05325__.js";
import _modDef5327 from "metro/05327__.js";
import _modDef5328 from "metro/05328__.js";
import _modDef5329 from "metro/05329__.js";
import _modDef5330 from "metro/05330__.js";
import _modDef5331 from "metro/05331__.js";
import 05301__ from "metro/05301__.js";
import decodeXPValue from "05323_decodeXPValue.js";

const objectAssignResult = module_5301.objectAssign({}, decodeXPValue, _modDef5325);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5327, interoperability: _modDef5328, mpf: null, canon: null, pentax: null };
if (_modDef5304.USE_MPF) {
  let importDefaultResult1 = _modDef5329;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5304.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5330;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5304.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5331;
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