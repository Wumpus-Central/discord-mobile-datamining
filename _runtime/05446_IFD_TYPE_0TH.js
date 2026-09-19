// _runtime/05446_IFD_TYPE_0TH.js
import _modDef5428 from "metro/05428__.js";
import _modDef5449 from "metro/05449__.js";
import _modDef5451 from "metro/05451__.js";
import _modDef5452 from "metro/05452__.js";
import _modDef5453 from "metro/05453__.js";
import _modDef5454 from "metro/05454__.js";
import _modDef5455 from "metro/05455__.js";
import 05425__ from "metro/05425__.js";
import decodeXPValue from "05447_decodeXPValue.js";

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