// _runtime/metro/16127__.js
import _mod16088 from "16088__.js";
import _mod16090 from "16090__.js";
import _mod16106 from "16106__.js";
import _mod16128 from "16128__.js";
import _mod16129 from "16129__.js";

let closure_2 = _mod16090([].push);

export default (arg0, arg1) => {
  const tmp = _mod16088(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16106;
    let tmp14Result = tmp14(_mod16128, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16106(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp4 = closure_2(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp7 = arg1[num];
    if (_mod16106(tmp, tmp7)) {
      let tmp5Result = _mod16129;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
