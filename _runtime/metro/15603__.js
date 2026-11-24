// _runtime/metro/15603__.js
import _mod15564 from "15564__.js";
import _mod15566 from "15566__.js";
import _mod15582 from "15582__.js";
import _mod15604 from "15604__.js";
import _mod15605 from "15605__.js";

let closure_2 = _mod15566([].push);

export default (arg0, arg1) => {
  const tmp = _mod15564(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15582;
    let tmp14Result = tmp14(_mod15604, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15582(tmp, key10010);
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
    if (_mod15582(tmp, tmp7)) {
      let tmp5Result = _mod15605;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
