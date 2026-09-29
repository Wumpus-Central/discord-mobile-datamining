// === Module 5714: IFD_TYPE_0TH ===

// Module 5714 (IFD_TYPE_0TH)
import _modDef5696 from "module_5696" /* 5696 */;
import _modDef5717 from "module_5717" /* 5717 */;
import _modDef5719 from "module_5719" /* 5719 */;
import _modDef5720 from "module_5720" /* 5720 */;
import _modDef5721 from "module_5721" /* 5721 */;
import _modDef5722 from "module_5722" /* 5722 */;
import _modDef5723 from "module_5723" /* 5723 */;
import module_5693 from "module_5693" /* 5693 */;
import decodeXPValue from "decodeXPValue" /* 5715 */;

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