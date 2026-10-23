// _runtime/metro/15564__.js
import _mod15525 from "15525__.js";
import _mod15527 from "15527__.js";
import _mod15543 from "15543__.js";
import _mod15565 from "15565__.js";
import _mod15566 from "15566__.js";

let closure_2 = _mod15527([].push);

export default (arg0, arg1) => {
  const tmp = _mod15525(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15543;
    let tmp14Result = tmp14(_mod15565, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15543(tmp, key10010);
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
    if (_mod15543(tmp, tmp7)) {
      let tmp5Result = _mod15566;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
