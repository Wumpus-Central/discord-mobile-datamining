// === Module 14430: ? ===

// Module 14430
import _mod14391 from "module_14391" /* 14391 */;
import _mod14393 from "module_14393" /* 14393 */;
import _mod14409 from "module_14409" /* 14409 */;
import _mod14431 from "module_14431" /* 14431 */;
import _mod14432 from "module_14432" /* 14432 */;

let closure_2 = _mod14393([].push);

export default (arg0, arg1) => {
  const tmp = _mod14391(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14409;
    let tmp14Result = tmp14(_mod14431, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14409(tmp, key10010);
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
    if (_mod14409(tmp, tmp7)) {
      let tmp5Result = _mod14432;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};