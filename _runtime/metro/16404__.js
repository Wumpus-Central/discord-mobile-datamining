// _runtime/metro/16404__.js
import _mod16365 from "16365__.js";
import _mod16367 from "16367__.js";
import _mod16383 from "16383__.js";
import _mod16405 from "16405__.js";
import _mod16406 from "16406__.js";

let closure_2 = _mod16367([].push);

export default (arg0, arg1) => {
  const tmp = _mod16365(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16383;
    let tmp14Result = tmp14(_mod16405, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16383(tmp, key10010);
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
    if (_mod16383(tmp, tmp7)) {
      let tmp5Result = _mod16406;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
