// _runtime/metro/16430__.js
import _mod16391 from "16391__.js";
import _mod16393 from "16393__.js";
import _mod16409 from "16409__.js";
import _mod16431 from "16431__.js";
import _mod16432 from "16432__.js";

let closure_2 = _mod16393([].push);

export default (arg0, arg1) => {
  const tmp = _mod16391(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16409;
    let tmp14Result = tmp14(_mod16431, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16409(tmp, key10010);
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
    if (_mod16409(tmp, tmp7)) {
      let tmp5Result = _mod16432;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
