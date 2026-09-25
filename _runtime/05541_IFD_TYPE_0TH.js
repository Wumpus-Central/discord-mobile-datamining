// === Module 5541: IFD_TYPE_0TH ===

// Module 5541 (IFD_TYPE_0TH)
import _modDef5523 from "module_5523" /* 5523 */;
import _modDef5544 from "module_5544" /* 5544 */;
import _modDef5546 from "module_5546" /* 5546 */;
import _modDef5547 from "module_5547" /* 5547 */;
import _modDef5548 from "module_5548" /* 5548 */;
import _modDef5549 from "module_5549" /* 5549 */;
import _modDef5550 from "module_5550" /* 5550 */;
import module_5520 from "module_5520" /* 5520 */;
import decodeXPValue from "decodeXPValue" /* 5542 */;

const objectAssignResult = module_5520.objectAssign({}, decodeXPValue, _modDef5544);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5546, interoperability: _modDef5547, mpf: null, canon: null, pentax: null };
if (_modDef5523.USE_MPF) {
  let importDefaultResult1 = _modDef5548;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5523.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5549;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5523.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5550;
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