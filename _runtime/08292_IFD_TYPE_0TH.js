// _runtime/08292_IFD_TYPE_0TH.js
import _modDef8274 from "metro/08274__.js";
import _modDef8295 from "metro/08295__.js";
import _modDef8297 from "metro/08297__.js";
import _modDef8298 from "metro/08298__.js";
import _modDef8299 from "metro/08299__.js";
import _modDef8300 from "metro/08300__.js";
import _modDef8301 from "metro/08301__.js";
import 08271__ from "metro/08271__.js";
import decodeXPValue from "08293_decodeXPValue.js";

const objectAssignResult = module_8271.objectAssign({}, decodeXPValue, _modDef8295);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8297, interoperability: _modDef8298, mpf: null, canon: null, pentax: null };
if (_modDef8274.USE_MPF) {
  let importDefaultResult1 = _modDef8299;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8274.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8300;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8274.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8301;
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