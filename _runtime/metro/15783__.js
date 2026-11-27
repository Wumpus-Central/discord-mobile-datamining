// _runtime/metro/15783__.js
import _mod15744 from "15744__.js";
import _mod15746 from "15746__.js";
import _mod15762 from "15762__.js";
import _mod15784 from "15784__.js";
import _mod15785 from "15785__.js";

let closure_2 = _mod15746([].push);

export default (arg0, arg1) => {
  const tmp = _mod15744(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15762;
    let tmp14Result = tmp14(_mod15784, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15762(tmp, key10010);
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
    if (_mod15762(tmp, tmp7)) {
      let tmp5Result = _mod15785;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
