// _runtime/metro/16087__.js
import _mod16048 from "16048__.js";
import _mod16050 from "16050__.js";
import _mod16066 from "16066__.js";
import _mod16088 from "16088__.js";
import _mod16089 from "16089__.js";

let closure_2 = _mod16050([].push);

export default (arg0, arg1) => {
  const tmp = _mod16048(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16066;
    let tmp14Result = tmp14(_mod16088, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16066(tmp, key10010);
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
    if (_mod16066(tmp, tmp7)) {
      let tmp5Result = _mod16089;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
