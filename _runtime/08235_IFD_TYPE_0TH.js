// _runtime/08235_IFD_TYPE_0TH.js
import _modDef8217 from "metro/08217__.js";
import _modDef8238 from "metro/08238__.js";
import _modDef8240 from "metro/08240__.js";
import _modDef8241 from "metro/08241__.js";
import _modDef8242 from "metro/08242__.js";
import _modDef8243 from "metro/08243__.js";
import _modDef8244 from "metro/08244__.js";
import 08214__ from "metro/08214__.js";
import decodeXPValue from "08236_decodeXPValue.js";

const objectAssignResult = module_8214.objectAssign({}, decodeXPValue, _modDef8238);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8240, interoperability: _modDef8241, mpf: null, canon: null, pentax: null };
if (_modDef8217.USE_MPF) {
  let importDefaultResult1 = _modDef8242;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8217.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8243;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8217.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8244;
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