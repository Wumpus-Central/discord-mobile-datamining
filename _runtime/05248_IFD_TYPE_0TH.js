// _runtime/05248_IFD_TYPE_0TH.js
import _modDef5230 from "metro/05230__.js";
import _modDef5251 from "metro/05251__.js";
import _modDef5253 from "metro/05253__.js";
import _modDef5254 from "metro/05254__.js";
import _modDef5255 from "metro/05255__.js";
import _modDef5256 from "metro/05256__.js";
import _modDef5257 from "metro/05257__.js";
import 05227__ from "metro/05227__.js";
import decodeXPValue from "05249_decodeXPValue.js";

const objectAssignResult = module_5227.objectAssign({}, decodeXPValue, _modDef5251);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5253, interoperability: _modDef5254, mpf: null, canon: null, pentax: null };
if (_modDef5230.USE_MPF) {
  let importDefaultResult1 = _modDef5255;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5230.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5256;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5230.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5257;
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