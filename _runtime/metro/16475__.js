// _runtime/metro/16475__.js
import _mod16436 from "16436__.js";
import _mod16438 from "16438__.js";
import _mod16454 from "16454__.js";
import _mod16476 from "16476__.js";
import _mod16477 from "16477__.js";

let closure_2 = _mod16438([].push);

export default (arg0, arg1) => {
  const tmp = _mod16436(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16454;
    let tmp14Result = tmp14(_mod16476, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16454(tmp, key10010);
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
    if (_mod16454(tmp, tmp7)) {
      let tmp5Result = _mod16477;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
