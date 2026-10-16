// _runtime/08070_IFD_TYPE_0TH.js
import _modDef8052 from "metro/08052__.js";
import _modDef8073 from "metro/08073__.js";
import _modDef8075 from "metro/08075__.js";
import _modDef8076 from "metro/08076__.js";
import _modDef8077 from "metro/08077__.js";
import _modDef8078 from "metro/08078__.js";
import _modDef8079 from "metro/08079__.js";
import 08049__ from "metro/08049__.js";
import decodeXPValue from "08071_decodeXPValue.js";

const objectAssignResult = module_8049.objectAssign({}, decodeXPValue, _modDef8073);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8075, interoperability: _modDef8076, mpf: null, canon: null, pentax: null };
if (_modDef8052.USE_MPF) {
  let importDefaultResult1 = _modDef8077;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8052.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8078;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8052.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8079;
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