// _runtime/05744_IFD_TYPE_0TH.js
import _modDef5726 from "metro/05726__.js";
import _modDef5747 from "metro/05747__.js";
import _modDef5749 from "metro/05749__.js";
import _modDef5750 from "metro/05750__.js";
import _modDef5751 from "metro/05751__.js";
import _modDef5752 from "metro/05752__.js";
import _modDef5753 from "metro/05753__.js";
import 05723__ from "metro/05723__.js";
import decodeXPValue from "05745_decodeXPValue.js";

const objectAssignResult = module_5723.objectAssign({}, decodeXPValue, _modDef5747);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5749, interoperability: _modDef5750, mpf: null, canon: null, pentax: null };
if (_modDef5726.USE_MPF) {
  let importDefaultResult1 = _modDef5751;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5726.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5752;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5726.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5753;
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