// _runtime/08445_IFD_TYPE_0TH.js
import _modDef8427 from "metro/08427__.js";
import _modDef8448 from "metro/08448__.js";
import _modDef8450 from "metro/08450__.js";
import _modDef8451 from "metro/08451__.js";
import _modDef8452 from "metro/08452__.js";
import _modDef8453 from "metro/08453__.js";
import _modDef8454 from "metro/08454__.js";
import 08424__ from "metro/08424__.js";
import decodeXPValue from "08446_decodeXPValue.js";

const objectAssignResult = module_8424.objectAssign({}, decodeXPValue, _modDef8448);
const obj = { "0th": objectAssignResult, "1st": decodeXPValue, exif: objectAssignResult, gps: _modDef8450, interoperability: _modDef8451, mpf: null, canon: null, pentax: null };
if (_modDef8427.USE_MPF) {
  let importDefaultResult1 = _modDef8452;
} else {
  importDefaultResult1 = {};
}
obj.mpf = importDefaultResult1;
if (_modDef8427.USE_MAKER_NOTES) {
  let importDefaultResult2 = _modDef8453;
} else {
  importDefaultResult2 = {};
}
obj.canon = importDefaultResult2;
if (_modDef8427.USE_MAKER_NOTES) {
  let importDefaultResult3 = _modDef8454;
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