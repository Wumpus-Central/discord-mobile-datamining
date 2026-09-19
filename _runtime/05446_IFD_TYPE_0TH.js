// === Module 5446: IFD_TYPE_0TH ===

// Module 5446 (IFD_TYPE_0TH)
import _modDef5428 from "module_5428" /* 5428 */;
import _modDef5449 from "module_5449" /* 5449 */;
import _modDef5451 from "module_5451" /* 5451 */;
import _modDef5452 from "module_5452" /* 5452 */;
import _modDef5453 from "module_5453" /* 5453 */;
import _modDef5454 from "module_5454" /* 5454 */;
import _modDef5455 from "module_5455" /* 5455 */;
import module_5425 from "module_5425" /* 5425 */;
import decodeXPValue from "decodeXPValue" /* 5447 */;

const objectAssignResult = module_5425.objectAssign({}, decodeXPValue, _modDef5449);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef5451, interoperability: _modDef5452, mpf: null, canon: null, pentax: null };
if (_modDef5428.USE_MPF) {
  let importDefaultResult1 = _modDef5453;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef5428.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef5454;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef5428.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef5455;
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