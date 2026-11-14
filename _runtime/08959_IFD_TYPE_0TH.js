// _runtime/08959_IFD_TYPE_0TH.js
import _modDef8941 from "metro/08941__.js";
import _modDef8962 from "metro/08962__.js";
import _modDef8964 from "metro/08964__.js";
import _modDef8965 from "metro/08965__.js";
import _modDef8966 from "metro/08966__.js";
import _modDef8967 from "metro/08967__.js";
import _modDef8968 from "metro/08968__.js";
import 08938__ from "metro/08938__.js";
import decodeXPValue from "08960_decodeXPValue.js";

const objectAssignResult = module_8938.objectAssign({}, decodeXPValue, _modDef8962);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8964, interoperability: _modDef8965, mpf: null, canon: null, pentax: null };
if (_modDef8941.USE_MPF) {
  let importDefaultResult1 = _modDef8966;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8941.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8967;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8941.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8968;
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