// _runtime/metro/15625__.js
import _mod15586 from "15586__.js";
import _mod15588 from "15588__.js";
import _mod15604 from "15604__.js";
import _mod15626 from "15626__.js";
import _mod15627 from "15627__.js";

let closure_2 = _mod15588([].push);

export default (arg0, arg1) => {
  const tmp = _mod15586(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15604;
    let tmp14Result = tmp14(_mod15626, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15604(tmp, key10010);
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
    if (_mod15604(tmp, tmp7)) {
      let tmp5Result = _mod15627;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
