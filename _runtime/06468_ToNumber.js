// _runtime/06468_ToNumber.js
import _mod1293 from "metro/01293__.js";
import _mod1294 from "metro/01294__.js";
import _mod6469 from "metro/06469__.js";
import ToPrimitive from "06470_ToPrimitive.js";
import StringToNumber from "06475_StringToNumber.js";

let closure_2 = _mod1293("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod6469(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1294("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1294("Conversion from 'BigInt' to 'number' is not allowed.");
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
