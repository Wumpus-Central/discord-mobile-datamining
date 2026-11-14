// _runtime/metro/16791__.js
import _mod16752 from "16752__.js";
import _mod16754 from "16754__.js";
import _mod16770 from "16770__.js";
import _mod16792 from "16792__.js";
import _mod16793 from "16793__.js";

let closure_2 = _mod16754([].push);

export default (arg0, arg1) => {
  const tmp = _mod16752(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16770;
    let tmp14Result = tmp14(_mod16792, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16770(tmp, key10010);
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
    if (_mod16770(tmp, tmp7)) {
      let tmp5Result = _mod16793;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
