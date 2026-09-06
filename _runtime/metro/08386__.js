// _runtime/metro/08386__.js
import _mod518 from "00518__.js";
import _mod521 from "00521__.js";
import _mod543 from "00543__.js";
import eq from "../00616_eq.js";

export default function isIterateeCall(arg0, num, arg2) {
  if (_mod521(arg2)) {
    if (typeof num === "number") {
      let tmp5 = _mod518(arg2) && _mod543(num, arg2.length);
      const tmp4 = _mod518(arg2) && _mod543(num, arg2.length);
    } else {
      tmp5 = typeof num === "string";
      if (typeof num === "string") {
        tmp5 = num in arg2;
      }
    }
    let tmp6 = tmp5;
    if (tmp6) {
      tmp6 = eq(arg2[num], arg0);
    }
    return tmp6;
  } else {
    return false;
  }
}
