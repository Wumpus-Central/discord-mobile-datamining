// _runtime/08183_IFD_TYPE_0TH.js
import _modDef8165 from "metro/08165__.js";
import _modDef8186 from "metro/08186__.js";
import _modDef8188 from "metro/08188__.js";
import _modDef8189 from "metro/08189__.js";
import _modDef8190 from "metro/08190__.js";
import _modDef8191 from "metro/08191__.js";
import _modDef8192 from "metro/08192__.js";
import 08162__ from "metro/08162__.js";
import decodeXPValue from "08184_decodeXPValue.js";

const objectAssignResult = module_8162.objectAssign({}, decodeXPValue, _modDef8186);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8188, interoperability: _modDef8189, mpf: null, canon: null, pentax: null };
if (_modDef8165.USE_MPF) {
  let importDefaultResult1 = _modDef8190;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8165.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8191;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8165.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8192;
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