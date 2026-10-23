// === Module 8233: IFD_TYPE_0TH ===

// Module 8233 (IFD_TYPE_0TH)
import _modDef8215 from "module_8215" /* 8215 */;
import _modDef8236 from "module_8236" /* 8236 */;
import _modDef8238 from "module_8238" /* 8238 */;
import _modDef8239 from "module_8239" /* 8239 */;
import _modDef8240 from "module_8240" /* 8240 */;
import _modDef8241 from "module_8241" /* 8241 */;
import _modDef8242 from "module_8242" /* 8242 */;
import module_8212 from "module_8212" /* 8212 */;
import decodeXPValue from "decodeXPValue" /* 8234 */;

const objectAssignResult = module_8212.objectAssign({}, decodeXPValue, _modDef8236);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8238, interoperability: _modDef8239, mpf: null, canon: null, pentax: null };
if (_modDef8215.USE_MPF) {
  let importDefaultResult1 = _modDef8240;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8215.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8241;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8215.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8242;
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