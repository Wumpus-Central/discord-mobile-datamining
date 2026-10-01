// _runtime/05733_IFD_TYPE_0TH.js
import _modDef5715 from "metro/05715__.js";
import _modDef5736 from "metro/05736__.js";
import _modDef5738 from "metro/05738__.js";
import _modDef5739 from "metro/05739__.js";
import _modDef5740 from "metro/05740__.js";
import _modDef5741 from "metro/05741__.js";
import _modDef5742 from "metro/05742__.js";
import 05712__ from "metro/05712__.js";
import decodeXPValue from "05734_decodeXPValue.js";

const objectAssignResult = module_5712.objectAssign({}, decodeXPValue, _modDef5736);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5738, interoperability: _modDef5739, mpf: null, canon: null, pentax: null };
if (_modDef5715.USE_MPF) {
  let importDefaultResult1 = _modDef5740;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5715.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5741;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5715.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5742;
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