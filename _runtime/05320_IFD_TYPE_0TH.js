// _runtime/05320_IFD_TYPE_0TH.js
import _modDef5302 from "metro/05302__.js";
import _modDef5323 from "metro/05323__.js";
import _modDef5325 from "metro/05325__.js";
import _modDef5326 from "metro/05326__.js";
import _modDef5327 from "metro/05327__.js";
import _modDef5328 from "metro/05328__.js";
import _modDef5329 from "metro/05329__.js";
import 05299__ from "metro/05299__.js";
import decodeXPValue from "05321_decodeXPValue.js";

const objectAssignResult = module_5299.objectAssign({}, decodeXPValue, _modDef5323);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5325, interoperability: _modDef5326, mpf: null, canon: null, pentax: null };
if (_modDef5302.USE_MPF) {
  let importDefaultResult1 = _modDef5327;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5302.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5328;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5302.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5329;
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