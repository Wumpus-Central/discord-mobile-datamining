// _runtime/08970_IFD_TYPE_0TH.js
import _modDef8952 from "metro/08952__.js";
import _modDef8973 from "metro/08973__.js";
import _modDef8975 from "metro/08975__.js";
import _modDef8976 from "metro/08976__.js";
import _modDef8977 from "metro/08977__.js";
import _modDef8978 from "metro/08978__.js";
import _modDef8979 from "metro/08979__.js";
import 08949__ from "metro/08949__.js";
import decodeXPValue from "08971_decodeXPValue.js";

const objectAssignResult = module_8949.objectAssign({}, decodeXPValue, _modDef8973);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8975, interoperability: _modDef8976, mpf: null, canon: null, pentax: null };
if (_modDef8952.USE_MPF) {
  let importDefaultResult1 = _modDef8977;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8952.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8978;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8952.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8979;
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