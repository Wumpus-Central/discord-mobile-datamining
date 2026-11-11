// _runtime/metro/16673__.js
import _mod16634 from "16634__.js";
import _mod16636 from "16636__.js";
import _mod16652 from "16652__.js";
import _mod16674 from "16674__.js";
import _mod16675 from "16675__.js";

let closure_2 = _mod16636([].push);

export default (arg0, arg1) => {
  const tmp = _mod16634(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16652;
    let tmp14Result = tmp14(_mod16674, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16652(tmp, key10010);
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
    if (_mod16652(tmp, tmp7)) {
      let tmp5Result = _mod16675;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
