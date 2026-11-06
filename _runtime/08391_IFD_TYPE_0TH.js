// _runtime/08391_IFD_TYPE_0TH.js
import _modDef8373 from "metro/08373__.js";
import _modDef8394 from "metro/08394__.js";
import _modDef8396 from "metro/08396__.js";
import _modDef8397 from "metro/08397__.js";
import _modDef8398 from "metro/08398__.js";
import _modDef8399 from "metro/08399__.js";
import _modDef8400 from "metro/08400__.js";
import 08370__ from "metro/08370__.js";
import decodeXPValue from "08392_decodeXPValue.js";

const objectAssignResult = module_8370.objectAssign({}, decodeXPValue, _modDef8394);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8396, interoperability: _modDef8397, mpf: null, canon: null, pentax: null };
if (_modDef8373.USE_MPF) {
  let importDefaultResult1 = _modDef8398;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8373.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8399;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8373.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8400;
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