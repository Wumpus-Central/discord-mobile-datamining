// _runtime/metro/14518__.js
import _mod14479 from "14479__.js";
import _mod14481 from "14481__.js";
import _mod14497 from "14497__.js";
import _mod14519 from "14519__.js";
import _mod14520 from "14520__.js";

let closure_2 = _mod14481([].push);

export default (arg0, arg1) => {
  const tmp = _mod14479(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14497;
    let tmp14Result = tmp14(_mod14519, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14497(tmp, key10010);
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
    if (_mod14497(tmp, tmp7)) {
      let tmp5Result = _mod14520;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
