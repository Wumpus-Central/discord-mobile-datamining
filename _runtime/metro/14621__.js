// _runtime/metro/14621__.js
import _mod14582 from "14582__.js";
import _mod14584 from "14584__.js";
import _mod14600 from "14600__.js";
import _mod14622 from "14622__.js";
import _mod14623 from "14623__.js";

let closure_2 = _mod14584([].push);

export default (arg0, arg1) => {
  const tmp = _mod14582(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14600;
    let tmp14Result = tmp14(_mod14622, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14600(tmp, key10010);
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
    if (_mod14600(tmp, tmp7)) {
      let tmp5Result = _mod14623;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
