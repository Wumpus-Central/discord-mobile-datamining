// _runtime/metro/14465__.js
import _mod14426 from "14426__.js";
import _mod14428 from "14428__.js";
import _mod14444 from "14444__.js";
import _mod14466 from "14466__.js";
import _mod14467 from "14467__.js";

let closure_2 = _mod14428([].push);

export default (arg0, arg1) => {
  const tmp = _mod14426(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14444;
    let tmp14Result = tmp14(_mod14466, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14444(tmp, key10010);
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
    if (_mod14444(tmp, tmp7)) {
      let tmp5Result = _mod14467;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
