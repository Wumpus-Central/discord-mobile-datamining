// _runtime/metro/16172__.js
import _mod16133 from "16133__.js";
import _mod16135 from "16135__.js";
import _mod16151 from "16151__.js";
import _mod16173 from "16173__.js";
import _mod16174 from "16174__.js";

let closure_2 = _mod16135([].push);

export default (arg0, arg1) => {
  const tmp = _mod16133(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16151;
    let tmp14Result = tmp14(_mod16173, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16151(tmp, key10010);
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
    if (_mod16151(tmp, tmp7)) {
      let tmp5Result = _mod16174;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
