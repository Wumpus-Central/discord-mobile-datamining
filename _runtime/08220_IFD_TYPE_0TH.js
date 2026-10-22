// _runtime/08220_IFD_TYPE_0TH.js
import _modDef8202 from "metro/08202__.js";
import _modDef8223 from "metro/08223__.js";
import _modDef8225 from "metro/08225__.js";
import _modDef8226 from "metro/08226__.js";
import _modDef8227 from "metro/08227__.js";
import _modDef8228 from "metro/08228__.js";
import _modDef8229 from "metro/08229__.js";
import 08199__ from "metro/08199__.js";
import decodeXPValue from "08221_decodeXPValue.js";

const objectAssignResult = module_8199.objectAssign({}, decodeXPValue, _modDef8223);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8225, interoperability: _modDef8226, mpf: null, canon: null, pentax: null };
if (_modDef8202.USE_MPF) {
  let importDefaultResult1 = _modDef8227;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8202.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8228;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8202.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8229;
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