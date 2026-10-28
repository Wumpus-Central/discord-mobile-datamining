// _runtime/08267_IFD_TYPE_0TH.js
import _modDef8249 from "metro/08249__.js";
import _modDef8270 from "metro/08270__.js";
import _modDef8272 from "metro/08272__.js";
import _modDef8273 from "metro/08273__.js";
import _modDef8274 from "metro/08274__.js";
import _modDef8275 from "metro/08275__.js";
import _modDef8276 from "metro/08276__.js";
import 08246__ from "metro/08246__.js";
import decodeXPValue from "08268_decodeXPValue.js";

const objectAssignResult = module_8246.objectAssign({}, decodeXPValue, _modDef8270);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8272, interoperability: _modDef8273, mpf: null, canon: null, pentax: null };
if (_modDef8249.USE_MPF) {
  let importDefaultResult1 = _modDef8274;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8249.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8275;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8249.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8276;
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