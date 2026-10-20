// _runtime/06359_ToNumber.js
import _mod1307 from "metro/01307__.js";
import _mod1308 from "metro/01308__.js";
import _mod6360 from "metro/06360__.js";
import ToPrimitive from "06361_ToPrimitive.js";
import StringToNumber from "06366_StringToNumber.js";

let closure_2 = _mod1307("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod6360(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1308("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1308("Conversion from 'BigInt' to 'number' is not allowed.");
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
