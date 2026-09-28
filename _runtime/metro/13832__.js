// _runtime/metro/13832__.js
import _mod13793 from "13793__.js";
import _mod13795 from "13795__.js";
import _mod13811 from "13811__.js";
import _mod13833 from "13833__.js";
import _mod13834 from "13834__.js";

let closure_2 = _mod13795([].push);

export default (arg0, arg1) => {
  const tmp = _mod13793(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod13811;
    let tmp14Result = tmp14(_mod13833, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod13811(tmp, key10010);
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
    if (_mod13811(tmp, tmp7)) {
      let tmp5Result = _mod13834;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
