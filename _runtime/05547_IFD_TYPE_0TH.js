// _runtime/05547_IFD_TYPE_0TH.js
import _modDef5529 from "metro/05529__.js";
import _modDef5550 from "metro/05550__.js";
import _modDef5552 from "metro/05552__.js";
import _modDef5553 from "metro/05553__.js";
import _modDef5554 from "metro/05554__.js";
import _modDef5555 from "metro/05555__.js";
import _modDef5556 from "metro/05556__.js";
import 05526__ from "metro/05526__.js";
import decodeXPValue from "05548_decodeXPValue.js";

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