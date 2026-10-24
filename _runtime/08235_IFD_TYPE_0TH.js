// === Module 8235: IFD_TYPE_0TH ===

// Module 8235 (IFD_TYPE_0TH)
import _modDef8217 from "module_8217" /* 8217 */;
import _modDef8238 from "module_8238" /* 8238 */;
import _modDef8240 from "module_8240" /* 8240 */;
import _modDef8241 from "module_8241" /* 8241 */;
import _modDef8242 from "module_8242" /* 8242 */;
import _modDef8243 from "module_8243" /* 8243 */;
import _modDef8244 from "module_8244" /* 8244 */;
import module_8214 from "module_8214" /* 8214 */;
import decodeXPValue from "decodeXPValue" /* 8236 */;

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