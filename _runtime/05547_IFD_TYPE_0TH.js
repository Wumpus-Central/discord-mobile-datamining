// === Module 5547: IFD_TYPE_0TH ===

// Module 5547 (IFD_TYPE_0TH)
import _modDef5529 from "module_5529" /* 5529 */;
import _modDef5550 from "module_5550" /* 5550 */;
import _modDef5552 from "module_5552" /* 5552 */;
import _modDef5553 from "module_5553" /* 5553 */;
import _modDef5554 from "module_5554" /* 5554 */;
import _modDef5555 from "module_5555" /* 5555 */;
import _modDef5556 from "module_5556" /* 5556 */;
import module_5526 from "module_5526" /* 5526 */;
import decodeXPValue from "decodeXPValue" /* 5548 */;

const objectAssignResult = module_5526.objectAssign({}, decodeXPValue, _modDef5550);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5552, interoperability: _modDef5553, mpf: null, canon: null, pentax: null };
if (_modDef5529.USE_MPF) {
  let importDefaultResult1 = _modDef5554;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5529.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5555;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5529.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5556;
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