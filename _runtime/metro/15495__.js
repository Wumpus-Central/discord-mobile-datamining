// _runtime/metro/15495__.js
import _mod15456 from "15456__.js";
import _mod15458 from "15458__.js";
import _mod15474 from "15474__.js";
import _mod15496 from "15496__.js";
import _mod15497 from "15497__.js";

let closure_2 = _mod15458([].push);

export default (arg0, arg1) => {
  const tmp = _mod15456(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15474;
    let tmp14Result = tmp14(_mod15496, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15474(tmp, key10010);
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
    if (_mod15474(tmp, tmp7)) {
      let tmp5Result = _mod15497;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
