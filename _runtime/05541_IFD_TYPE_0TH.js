// _runtime/05541_IFD_TYPE_0TH.js
import _modDef5523 from "metro/05523__.js";
import _modDef5544 from "metro/05544__.js";
import _modDef5546 from "metro/05546__.js";
import _modDef5547 from "metro/05547__.js";
import _modDef5548 from "metro/05548__.js";
import _modDef5549 from "metro/05549__.js";
import _modDef5550 from "metro/05550__.js";
import 05520__ from "metro/05520__.js";
import decodeXPValue from "05542_decodeXPValue.js";

const objectAssignResult = module_5520.objectAssign({}, decodeXPValue, _modDef5544);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5546, interoperability: _modDef5547, mpf: null, canon: null, pentax: null };
if (_modDef5523.USE_MPF) {
  let importDefaultResult1 = _modDef5548;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5523.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5549;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5523.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5550;
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