// _runtime/04821_ToNumber.js
import _mod1282 from "metro/01282__.js";
import _mod1283 from "metro/01283__.js";
import _mod4822 from "metro/04822__.js";
import ToPrimitive from "04823_ToPrimitive.js";
import StringToNumber from "04828_StringToNumber.js";

let closure_2 = _mod1282("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod4822(arg0)) {
    tmp3 = ToPrimitive(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new _mod1283("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new _mod1283("Conversion from 'BigInt' to 'number' is not allowed.");
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
