// _runtime/05315_IFD_TYPE_0TH.js
import _modDef5297 from "metro/05297__.js";
import _modDef5318 from "metro/05318__.js";
import _modDef5320 from "metro/05320__.js";
import _modDef5321 from "metro/05321__.js";
import _modDef5322 from "metro/05322__.js";
import _modDef5323 from "metro/05323__.js";
import _modDef5324 from "metro/05324__.js";
import 05294__ from "metro/05294__.js";
import decodeXPValue from "05316_decodeXPValue.js";

const objectAssignResult = module_5294.objectAssign({}, decodeXPValue, _modDef5318);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5320, interoperability: _modDef5321, mpf: null, canon: null, pentax: null };
if (_modDef5297.USE_MPF) {
  let importDefaultResult1 = _modDef5322;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5297.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5323;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5297.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5324;
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