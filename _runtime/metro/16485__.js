// _runtime/metro/16485__.js
import _mod16446 from "16446__.js";
import _mod16448 from "16448__.js";
import _mod16464 from "16464__.js";
import _mod16486 from "16486__.js";
import _mod16487 from "16487__.js";

let closure_2 = _mod16448([].push);

export default (arg0, arg1) => {
  const tmp = _mod16446(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16464;
    let tmp14Result = tmp14(_mod16486, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16464(tmp, key10010);
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
    if (_mod16464(tmp, tmp7)) {
      let tmp5Result = _mod16487;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
