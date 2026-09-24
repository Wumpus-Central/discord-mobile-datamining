// === Module 5539: IFD_TYPE_0TH ===

// Module 5539 (IFD_TYPE_0TH)
import _modDef5521 from "module_5521" /* 5521 */;
import _modDef5542 from "module_5542" /* 5542 */;
import _modDef5544 from "module_5544" /* 5544 */;
import _modDef5545 from "module_5545" /* 5545 */;
import _modDef5546 from "module_5546" /* 5546 */;
import _modDef5547 from "module_5547" /* 5547 */;
import _modDef5548 from "module_5548" /* 5548 */;
import module_5518 from "module_5518" /* 5518 */;
import decodeXPValue from "decodeXPValue" /* 5540 */;

const objectAssignResult = module_5518.objectAssign({}, decodeXPValue, _modDef5542);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5544, interoperability: _modDef5545, mpf: null, canon: null, pentax: null };
if (_modDef5521.USE_MPF) {
  let importDefaultResult1 = _modDef5546;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5521.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5547;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5521.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5548;
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