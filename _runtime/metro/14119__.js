// _runtime/metro/14119__.js
import _mod14102 from "14102__.js";
import _mod14120 from "14120__.js";
import defineProperty2 from "../14133_defineProperty2.js";

export default (arg0, arg1, arg2) => {
  let num;
  const arr = _mod14120(arg1);
  const f = defineProperty2.f;
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = arr[num];
    let tmp5 = _mod14102(arg0, tmp2);
    if (!tmp5) {
      let tmp7 = arg2 && _mod14102(arg2, tmp2);
      tmp5 = tmp7;
    }
    if (!tmp5) {
      let fResult = f(arg0, tmp2, tmp(arg1, tmp2));
    }
  }
};
