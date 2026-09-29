// === Module 14001: ? ===

// Module 14001
import _mod13962 from "module_13962" /* 13962 */;
import _mod13964 from "module_13964" /* 13964 */;
import _mod13980 from "module_13980" /* 13980 */;
import _mod14002 from "module_14002" /* 14002 */;
import _mod14003 from "module_14003" /* 14003 */;

let closure_2 = _mod13964([].push);

export default (arg0, arg1) => {
  const tmp = _mod13962(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod13980;
    let tmp14Result = tmp14(_mod14002, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod13980(tmp, key10010);
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
    if (_mod13980(tmp, tmp7)) {
      let tmp5Result = _mod14003;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};