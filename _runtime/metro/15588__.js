// _runtime/metro/15588__.js
import _mod15549 from "15549__.js";
import _mod15551 from "15551__.js";
import _mod15567 from "15567__.js";
import _mod15589 from "15589__.js";
import _mod15590 from "15590__.js";

let closure_2 = _mod15551([].push);

export default (arg0, arg1) => {
  const tmp = _mod15549(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15567;
    let tmp14Result = tmp14(_mod15589, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15567(tmp, key10010);
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
    if (_mod15567(tmp, tmp7)) {
      let tmp5Result = _mod15590;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
