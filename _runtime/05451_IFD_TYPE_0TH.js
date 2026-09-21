// _runtime/05451_IFD_TYPE_0TH.js
import _modDef5433 from "metro/05433__.js";
import _modDef5454 from "metro/05454__.js";
import _modDef5456 from "metro/05456__.js";
import _modDef5457 from "metro/05457__.js";
import _modDef5458 from "metro/05458__.js";
import _modDef5459 from "metro/05459__.js";
import _modDef5460 from "metro/05460__.js";
import 05430__ from "metro/05430__.js";
import decodeXPValue from "05452_decodeXPValue.js";

const objectAssignResult = module_5430.objectAssign({}, decodeXPValue, _modDef5454);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5456, interoperability: _modDef5457, mpf: null, canon: null, pentax: null };
if (_modDef5433.USE_MPF) {
  let importDefaultResult1 = _modDef5458;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5433.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5459;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5433.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5460;
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