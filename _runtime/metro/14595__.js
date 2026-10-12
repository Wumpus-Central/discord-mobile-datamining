// === Module 14595: ? ===

// Module 14595
import _mod14556 from "module_14556" /* 14556 */;
import _mod14558 from "module_14558" /* 14558 */;
import _mod14574 from "module_14574" /* 14574 */;
import _mod14596 from "module_14596" /* 14596 */;
import _mod14597 from "module_14597" /* 14597 */;

let closure_2 = _mod14558([].push);

export default (arg0, arg1) => {
  const tmp = _mod14556(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14574;
    let tmp14Result = tmp14(_mod14596, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14574(tmp, key10010);
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
    if (_mod14574(tmp, tmp7)) {
      let tmp5Result = _mod14597;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};