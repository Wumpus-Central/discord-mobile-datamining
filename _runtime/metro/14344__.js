// _runtime/metro/14344__.js
import _mod14305 from "14305__.js";
import _mod14307 from "14307__.js";
import _mod14323 from "14323__.js";
import _mod14345 from "14345__.js";
import _mod14346 from "14346__.js";

let closure_2 = _mod14307([].push);

export default (arg0, arg1) => {
  const tmp = _mod14305(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14323;
    let tmp14Result = tmp14(_mod14345, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14323(tmp, key10010);
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
    if (_mod14323(tmp, tmp7)) {
      let tmp5Result = _mod14346;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
