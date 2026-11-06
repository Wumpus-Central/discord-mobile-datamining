// _runtime/metro/16427__.js
import _mod16388 from "16388__.js";
import _mod16390 from "16390__.js";
import _mod16406 from "16406__.js";
import _mod16428 from "16428__.js";
import _mod16429 from "16429__.js";

let closure_2 = _mod16390([].push);

export default (arg0, arg1) => {
  const tmp = _mod16388(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16406;
    let tmp14Result = tmp14(_mod16428, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16406(tmp, key10010);
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
    if (_mod16406(tmp, tmp7)) {
      let tmp5Result = _mod16429;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
