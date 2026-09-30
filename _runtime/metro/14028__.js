// === Module 14028: ? ===

// Module 14028
import _mod13989 from "module_13989" /* 13989 */;
import _mod13991 from "module_13991" /* 13991 */;
import _mod14007 from "module_14007" /* 14007 */;
import _mod14029 from "module_14029" /* 14029 */;
import _mod14030 from "module_14030" /* 14030 */;

let closure_2 = _mod13991([].push);

export default (arg0, arg1) => {
  const tmp = _mod13989(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14007;
    let tmp14Result = tmp14(_mod14029, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14007(tmp, key10010);
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
    if (_mod14007(tmp, tmp7)) {
      let tmp5Result = _mod14030;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};