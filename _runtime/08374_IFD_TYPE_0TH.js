// _runtime/08374_IFD_TYPE_0TH.js
import _modDef8356 from "metro/08356__.js";
import _modDef8377 from "metro/08377__.js";
import _modDef8379 from "metro/08379__.js";
import _modDef8380 from "metro/08380__.js";
import _modDef8381 from "metro/08381__.js";
import _modDef8382 from "metro/08382__.js";
import _modDef8383 from "metro/08383__.js";
import 08353__ from "metro/08353__.js";
import decodeXPValue from "08375_decodeXPValue.js";

const objectAssignResult = module_8353.objectAssign({}, decodeXPValue, _modDef8377);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8379, interoperability: _modDef8380, mpf: null, canon: null, pentax: null };
if (_modDef8356.USE_MPF) {
  let importDefaultResult1 = _modDef8381;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8356.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8382;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8356.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8383;
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