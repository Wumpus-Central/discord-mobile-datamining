// _runtime/metro/14422__.js
import _mod14383 from "14383__.js";
import _mod14385 from "14385__.js";
import _mod14401 from "14401__.js";
import _mod14423 from "14423__.js";
import _mod14424 from "14424__.js";

let closure_2 = _mod14385([].push);

export default (arg0, arg1) => {
  const tmp = _mod14383(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14401;
    let tmp14Result = tmp14(_mod14423, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14401(tmp, key10010);
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
    if (_mod14401(tmp, tmp7)) {
      let tmp5Result = _mod14424;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
