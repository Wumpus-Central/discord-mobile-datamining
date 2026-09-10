// _runtime/05284_IFD_TYPE_0TH.js
import _modDef5266 from "metro/05266__.js";
import _modDef5287 from "metro/05287__.js";
import _modDef5289 from "metro/05289__.js";
import _modDef5290 from "metro/05290__.js";
import _modDef5291 from "metro/05291__.js";
import _modDef5292 from "metro/05292__.js";
import _modDef5293 from "metro/05293__.js";
import 05263__ from "metro/05263__.js";
import decodeXPValue from "05285_decodeXPValue.js";

const objectAssignResult = module_5263.objectAssign({}, decodeXPValue, _modDef5287);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5289, interoperability: _modDef5290, mpf: null, canon: null, pentax: null };
if (_modDef5266.USE_MPF) {
  let importDefaultResult1 = _modDef5291;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5266.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5292;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5266.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5293;
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