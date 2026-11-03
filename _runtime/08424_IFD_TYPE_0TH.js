// _runtime/08424_IFD_TYPE_0TH.js
import _modDef8406 from "metro/08406__.js";
import _modDef8427 from "metro/08427__.js";
import _modDef8429 from "metro/08429__.js";
import _modDef8430 from "metro/08430__.js";
import _modDef8431 from "metro/08431__.js";
import _modDef8432 from "metro/08432__.js";
import _modDef8433 from "metro/08433__.js";
import 08403__ from "metro/08403__.js";
import decodeXPValue from "08425_decodeXPValue.js";

const objectAssignResult = module_8403.objectAssign({}, decodeXPValue, _modDef8427);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8429, interoperability: _modDef8430, mpf: null, canon: null, pentax: null };
if (_modDef8406.USE_MPF) {
  let importDefaultResult1 = _modDef8431;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8406.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8432;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8406.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8433;
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