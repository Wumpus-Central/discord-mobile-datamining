// _runtime/08300_IFD_TYPE_0TH.js
import _modDef8282 from "metro/08282__.js";
import _modDef8303 from "metro/08303__.js";
import _modDef8305 from "metro/08305__.js";
import _modDef8306 from "metro/08306__.js";
import _modDef8307 from "metro/08307__.js";
import _modDef8308 from "metro/08308__.js";
import _modDef8309 from "metro/08309__.js";
import 08279__ from "metro/08279__.js";
import decodeXPValue from "08301_decodeXPValue.js";

const objectAssignResult = module_8279.objectAssign({}, decodeXPValue, _modDef8303);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8305, interoperability: _modDef8306, mpf: null, canon: null, pentax: null };
if (_modDef8282.USE_MPF) {
  let importDefaultResult1 = _modDef8307;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8282.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8308;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8282.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8309;
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