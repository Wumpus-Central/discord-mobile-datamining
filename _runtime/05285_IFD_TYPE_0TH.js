// _runtime/05285_IFD_TYPE_0TH.js
import _modDef5267 from "metro/05267__.js";
import _modDef5288 from "metro/05288__.js";
import _modDef5290 from "metro/05290__.js";
import _modDef5291 from "metro/05291__.js";
import _modDef5292 from "metro/05292__.js";
import _modDef5293 from "metro/05293__.js";
import _modDef5294 from "metro/05294__.js";
import 05264__ from "metro/05264__.js";
import decodeXPValue from "05286_decodeXPValue.js";

const objectAssignResult = module_5264.objectAssign({}, decodeXPValue, _modDef5288);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5290, interoperability: _modDef5291, mpf: null, canon: null, pentax: null };
if (_modDef5267.USE_MPF) {
  let importDefaultResult1 = _modDef5292;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5267.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5293;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5267.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5294;
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