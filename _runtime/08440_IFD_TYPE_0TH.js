// _runtime/08440_IFD_TYPE_0TH.js
import _modDef8422 from "metro/08422__.js";
import _modDef8443 from "metro/08443__.js";
import _modDef8445 from "metro/08445__.js";
import _modDef8446 from "metro/08446__.js";
import _modDef8447 from "metro/08447__.js";
import _modDef8448 from "metro/08448__.js";
import _modDef8449 from "metro/08449__.js";
import 08419__ from "metro/08419__.js";
import decodeXPValue from "08441_decodeXPValue.js";

const objectAssignResult = module_8419.objectAssign({}, decodeXPValue, _modDef8443);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8445, interoperability: _modDef8446, mpf: null, canon: null, pentax: null };
if (_modDef8422.USE_MPF) {
  let importDefaultResult1 = _modDef8447;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8422.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8448;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8422.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8449;
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