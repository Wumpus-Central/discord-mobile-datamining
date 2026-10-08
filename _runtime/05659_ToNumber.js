// _runtime/05659_ToNumber.js
import _mod1304 from "metro/01304__.js";
import _mod1305 from "metro/01305__.js";
import _mod5660 from "metro/05660__.js";
import ToPrimitive from "05661_ToPrimitive.js";
import StringToNumber from "05666_StringToNumber.js";

let closure_2 = _mod1304("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5660(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1305("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1305("Conversion from 'BigInt' to 'number' is not allowed.");
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
