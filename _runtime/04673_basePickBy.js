// _runtime/04673_basePickBy.js
import baseGet from "00591_baseGet.js";

export default function basePickBy(arg0, arg1, fn) {
  const obj = {};
  for (let num = 0; num < length; num = num + 1) {
    let tmp = arg1[num];
    let tmp2 = require;
    let tmp4 = baseGet(arg0, tmp);
    if (fn(tmp4, tmp)) {
      let tmp2Result = tmp2(4674);
      let tmp2ResultResult = tmp2Result(obj, tmp2(592)(tmp, arg0), tmp4);
    }
  }
  return obj;
}
