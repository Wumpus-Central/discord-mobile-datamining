// === Module 16485: ? ===

// Module 16485
import _mod16446 from "module_16446" /* 16446 */;
import _mod16448 from "module_16448" /* 16448 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16486 from "module_16486" /* 16486 */;
import _mod16487 from "module_16487" /* 16487 */;

let closure_2 = _mod16448([].push);

export default (arg0, arg1) => {
  const tmp = _mod16446(arg0);
  items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod16464;
    let tmp14Result = tmp14(_mod16486, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod16464(tmp, key10010);
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
    if (_mod16464(tmp, tmp7)) {
      let tmp5Result = _mod16487;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};