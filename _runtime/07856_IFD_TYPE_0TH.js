// _runtime/07856_IFD_TYPE_0TH.js
import _modDef7838 from "metro/07838__.js";
import _modDef7859 from "metro/07859__.js";
import _modDef7861 from "metro/07861__.js";
import _modDef7862 from "metro/07862__.js";
import _modDef7863 from "metro/07863__.js";
import _modDef7864 from "metro/07864__.js";
import _modDef7865 from "metro/07865__.js";
import 07835__ from "metro/07835__.js";
import decodeXPValue from "07857_decodeXPValue.js";

const objectAssignResult = module_7835.objectAssign({}, decodeXPValue, _modDef7859);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7861, interoperability: _modDef7862, mpf: null, canon: null, pentax: null };
if (_modDef7838.USE_MPF) {
  let importDefaultResult1 = _modDef7863;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7838.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7864;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7838.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7865;
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