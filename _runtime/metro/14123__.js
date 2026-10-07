// _runtime/metro/14123__.js
import _mod14084 from "14084__.js";
import _mod14086 from "14086__.js";
import _mod14102 from "14102__.js";
import _mod14124 from "14124__.js";
import _mod14125 from "14125__.js";

let closure_2 = _mod14086([].push);

export default (arg0, arg1) => {
  const tmp = _mod14084(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14102;
    let tmp14Result = tmp14(_mod14124, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14102(tmp, key10010);
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
    if (_mod14102(tmp, tmp7)) {
      let tmp5Result = _mod14125;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
