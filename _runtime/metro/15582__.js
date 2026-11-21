// _runtime/metro/15582__.js
import _mod15543 from "15543__.js";
import _mod15545 from "15545__.js";
import _mod15561 from "15561__.js";
import _mod15583 from "15583__.js";
import _mod15584 from "15584__.js";

let closure_2 = _mod15545([].push);

export default (arg0, arg1) => {
  const tmp = _mod15543(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15561;
    let tmp14Result = tmp14(_mod15583, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15561(tmp, key10010);
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
    if (_mod15561(tmp, tmp7)) {
      let tmp5Result = _mod15584;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
