// _runtime/08221_IFD_TYPE_0TH.js
import _modDef8203 from "metro/08203__.js";
import _modDef8224 from "metro/08224__.js";
import _modDef8226 from "metro/08226__.js";
import _modDef8227 from "metro/08227__.js";
import _modDef8228 from "metro/08228__.js";
import _modDef8229 from "metro/08229__.js";
import _modDef8230 from "metro/08230__.js";
import 08200__ from "metro/08200__.js";
import decodeXPValue from "08222_decodeXPValue.js";

const objectAssignResult = module_8200.objectAssign({}, decodeXPValue, _modDef8224);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8226, interoperability: _modDef8227, mpf: null, canon: null, pentax: null };
if (_modDef8203.USE_MPF) {
  let importDefaultResult1 = _modDef8228;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8203.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8229;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8203.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8230;
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