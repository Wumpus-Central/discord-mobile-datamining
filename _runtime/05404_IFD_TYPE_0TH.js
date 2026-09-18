// _runtime/05404_IFD_TYPE_0TH.js
import _modDef5386 from "metro/05386__.js";
import _modDef5407 from "metro/05407__.js";
import _modDef5409 from "metro/05409__.js";
import _modDef5410 from "metro/05410__.js";
import _modDef5411 from "metro/05411__.js";
import _modDef5412 from "metro/05412__.js";
import _modDef5413 from "metro/05413__.js";
import 05383__ from "metro/05383__.js";
import decodeXPValue from "05405_decodeXPValue.js";

const objectAssignResult = module_5383.objectAssign({}, decodeXPValue, _modDef5407);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5409, interoperability: _modDef5410, mpf: null, canon: null, pentax: null };
if (_modDef5386.USE_MPF) {
  let importDefaultResult1 = _modDef5411;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5386.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5412;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5386.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5413;
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