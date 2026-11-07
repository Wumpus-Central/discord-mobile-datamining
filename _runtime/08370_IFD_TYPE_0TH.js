// _runtime/08370_IFD_TYPE_0TH.js
import _modDef8352 from "metro/08352__.js";
import _modDef8373 from "metro/08373__.js";
import _modDef8375 from "metro/08375__.js";
import _modDef8376 from "metro/08376__.js";
import _modDef8377 from "metro/08377__.js";
import _modDef8378 from "metro/08378__.js";
import _modDef8379 from "metro/08379__.js";
import 08349__ from "metro/08349__.js";
import decodeXPValue from "08371_decodeXPValue.js";

const objectAssignResult = module_8349.objectAssign({}, decodeXPValue, _modDef8373);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8375, interoperability: _modDef8376, mpf: null, canon: null, pentax: null };
if (_modDef8352.USE_MPF) {
  let importDefaultResult1 = _modDef8377;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8352.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8378;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8352.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8379;
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