// _runtime/metro/14394__.js
import _mod14355 from "14355__.js";
import _mod14357 from "14357__.js";
import _mod14373 from "14373__.js";
import _mod14395 from "14395__.js";
import _mod14396 from "14396__.js";

let closure_2 = _mod14357([].push);

export default (arg0, arg1) => {
  const tmp = _mod14355(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14373;
    let tmp14Result = tmp14(_mod14395, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14373(tmp, key10010);
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
    if (_mod14373(tmp, tmp7)) {
      let tmp5Result = _mod14396;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
