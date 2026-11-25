// _runtime/metro/15725__.js
import _mod15686 from "15686__.js";
import _mod15688 from "15688__.js";
import _mod15704 from "15704__.js";
import _mod15726 from "15726__.js";
import _mod15727 from "15727__.js";

let closure_2 = _mod15688([].push);

export default (arg0, arg1) => {
  const tmp = _mod15686(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15704;
    let tmp14Result = tmp14(_mod15726, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15704(tmp, key10010);
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
    if (_mod15704(tmp, tmp7)) {
      let tmp5Result = _mod15727;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
