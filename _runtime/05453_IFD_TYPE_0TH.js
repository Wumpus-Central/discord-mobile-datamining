// _runtime/05453_IFD_TYPE_0TH.js
import _modDef5435 from "metro/05435__.js";
import _modDef5456 from "metro/05456__.js";
import _modDef5458 from "metro/05458__.js";
import _modDef5459 from "metro/05459__.js";
import _modDef5460 from "metro/05460__.js";
import _modDef5461 from "metro/05461__.js";
import _modDef5462 from "metro/05462__.js";
import 05432__ from "metro/05432__.js";
import decodeXPValue from "05454_decodeXPValue.js";

const objectAssignResult = module_5432.objectAssign({}, decodeXPValue, _modDef5456);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5458, interoperability: _modDef5459, mpf: null, canon: null, pentax: null };
if (_modDef5435.USE_MPF) {
  let importDefaultResult1 = _modDef5460;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5435.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5461;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5435.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5462;
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