// _runtime/05539_IFD_TYPE_0TH.js
import _modDef5521 from "metro/05521__.js";
import _modDef5542 from "metro/05542__.js";
import _modDef5544 from "metro/05544__.js";
import _modDef5545 from "metro/05545__.js";
import _modDef5546 from "metro/05546__.js";
import _modDef5547 from "metro/05547__.js";
import _modDef5548 from "metro/05548__.js";
import 05518__ from "metro/05518__.js";
import decodeXPValue from "05540_decodeXPValue.js";

const objectAssignResult = module_5518.objectAssign({}, decodeXPValue, _modDef5542);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5544, interoperability: _modDef5545, mpf: null, canon: null, pentax: null };
if (_modDef5521.USE_MPF) {
  let importDefaultResult1 = _modDef5546;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5521.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5547;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5521.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5548;
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