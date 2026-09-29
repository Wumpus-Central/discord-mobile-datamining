// _runtime/05714_IFD_TYPE_0TH.js
import _modDef5696 from "metro/05696__.js";
import _modDef5717 from "metro/05717__.js";
import _modDef5719 from "metro/05719__.js";
import _modDef5720 from "metro/05720__.js";
import _modDef5721 from "metro/05721__.js";
import _modDef5722 from "metro/05722__.js";
import _modDef5723 from "metro/05723__.js";
import 05693__ from "metro/05693__.js";
import decodeXPValue from "05715_decodeXPValue.js";

const objectAssignResult = module_5693.objectAssign({}, decodeXPValue, _modDef5717);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5719, interoperability: _modDef5720, mpf: null, canon: null, pentax: null };
if (_modDef5696.USE_MPF) {
  let importDefaultResult1 = _modDef5721;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5696.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5722;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5696.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5723;
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