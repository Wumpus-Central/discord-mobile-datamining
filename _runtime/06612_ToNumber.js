// _runtime/06612_ToNumber.js
import _mod1292 from "metro/01292__.js";
import _mod1293 from "metro/01293__.js";
import _mod6613 from "metro/06613__.js";
import ToPrimitive from "06614_ToPrimitive.js";
import StringToNumber from "06619_StringToNumber.js";

let closure_2 = _mod1292("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod6613(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1293("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1293("Conversion from 'BigInt' to 'number' is not allowed.");
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
