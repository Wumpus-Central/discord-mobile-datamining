// _runtime/08179_IFD_TYPE_0TH.js
import _modDef8161 from "metro/08161__.js";
import _modDef8182 from "metro/08182__.js";
import _modDef8184 from "metro/08184__.js";
import _modDef8185 from "metro/08185__.js";
import _modDef8186 from "metro/08186__.js";
import _modDef8187 from "metro/08187__.js";
import _modDef8188 from "metro/08188__.js";
import 08158__ from "metro/08158__.js";
import decodeXPValue from "08180_decodeXPValue.js";

const objectAssignResult = module_8158.objectAssign({}, decodeXPValue, _modDef8182);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8184, interoperability: _modDef8185, mpf: null, canon: null, pentax: null };
if (_modDef8161.USE_MPF) {
  let importDefaultResult1 = _modDef8186;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8161.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8187;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8161.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8188;
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