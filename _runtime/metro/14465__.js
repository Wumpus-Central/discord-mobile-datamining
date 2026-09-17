// === Module 14465: ? ===

// Module 14465
import _mod14426 from "module_14426" /* 14426 */;
import _mod14428 from "module_14428" /* 14428 */;
import _mod14444 from "module_14444" /* 14444 */;
import _mod14466 from "module_14466" /* 14466 */;
import _mod14467 from "module_14467" /* 14467 */;

let closure_2 = _mod14428([].push);

export default (arg0, arg1) => {
  const tmp = _mod14426(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14444;
    let tmp14Result = tmp14(_mod14466, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14444(tmp, key10010);
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
    if (_mod14444(tmp, tmp7)) {
      let tmp5Result = _mod14467;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};