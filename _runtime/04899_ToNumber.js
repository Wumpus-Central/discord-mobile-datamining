// _runtime/04899_ToNumber.js
import _mod1281 from "metro/01281__.js";
import _mod1282 from "metro/01282__.js";
import _mod4900 from "metro/04900__.js";
import ToPrimitive from "04901_ToPrimitive.js";
import StringToNumber from "04906_StringToNumber.js";

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4900(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1282("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1282("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = StringToNumber(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
}
