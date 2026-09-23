// _runtime/05537_IFD_TYPE_0TH.js
import _modDef5519 from "metro/05519__.js";
import _modDef5540 from "metro/05540__.js";
import _modDef5542 from "metro/05542__.js";
import _modDef5543 from "metro/05543__.js";
import _modDef5544 from "metro/05544__.js";
import _modDef5545 from "metro/05545__.js";
import _modDef5546 from "metro/05546__.js";
import 05516__ from "metro/05516__.js";
import decodeXPValue from "05538_decodeXPValue.js";

const objectAssignResult = module_5516.objectAssign({}, decodeXPValue, _modDef5540);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5542, interoperability: _modDef5543, mpf: null, canon: null, pentax: null };
if (_modDef5519.USE_MPF) {
  let importDefaultResult1 = _modDef5544;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5519.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5545;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5519.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5546;
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