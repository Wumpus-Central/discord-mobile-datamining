// _runtime/metro/15580__.js
import _mod15541 from "15541__.js";
import _mod15543 from "15543__.js";
import _mod15559 from "15559__.js";
import _mod15581 from "15581__.js";
import _mod15582 from "15582__.js";

let closure_2 = _mod15543([].push);

export default (arg0, arg1) => {
  const tmp = _mod15541(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15559;
    let tmp14Result = tmp14(_mod15581, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15559(tmp, key10010);
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
    if (_mod15559(tmp, tmp7)) {
      let tmp5Result = _mod15582;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
