// _runtime/07830_IFD_TYPE_0TH.js
import _modDef7812 from "metro/07812__.js";
import _modDef7833 from "metro/07833__.js";
import _modDef7835 from "metro/07835__.js";
import _modDef7836 from "metro/07836__.js";
import _modDef7837 from "metro/07837__.js";
import _modDef7838 from "metro/07838__.js";
import _modDef7839 from "metro/07839__.js";
import 07809__ from "metro/07809__.js";
import decodeXPValue from "07831_decodeXPValue.js";

const objectAssignResult = module_7809.objectAssign({}, decodeXPValue, _modDef7833);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef7835, interoperability: _modDef7836, mpf: null, canon: null, pentax: null };
if (_modDef7812.USE_MPF) {
  let importDefaultResult1 = _modDef7837;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef7812.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef7838;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef7812.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef7839;
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