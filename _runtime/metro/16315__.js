// _runtime/metro/16315__.js
import _mod16276 from "16276__.js";
import _mod16278 from "16278__.js";
import _mod16294 from "16294__.js";
import _mod16316 from "16316__.js";
import _mod16317 from "16317__.js";

let closure_2 = _mod16278([].push);

export default (arg0, arg1) => {
  const tmp = _mod16276(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16294;
    let tmp14Result = tmp14(_mod16316, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16294(tmp, key10010);
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
    if (_mod16294(tmp, tmp7)) {
      let tmp5Result = _mod16317;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
