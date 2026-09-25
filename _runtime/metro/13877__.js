// _runtime/metro/13877__.js
import _mod13838 from "13838__.js";
import _mod13840 from "13840__.js";
import _mod13856 from "13856__.js";
import _mod13878 from "13878__.js";
import _mod13879 from "13879__.js";

let closure_2 = _mod13840([].push);

export default (arg0, arg1) => {
  const tmp = _mod13838(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod13856;
    let tmp14Result = tmp14(_mod13878, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod13856(tmp, key10010);
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
    if (_mod13856(tmp, tmp7)) {
      let tmp5Result = _mod13879;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
