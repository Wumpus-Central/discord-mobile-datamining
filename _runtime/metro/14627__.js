// === Module 14627: ? ===

// Module 14627
import _mod14588 from "module_14588" /* 14588 */;
import _mod14590 from "module_14590" /* 14590 */;
import _mod14606 from "module_14606" /* 14606 */;
import _mod14628 from "module_14628" /* 14628 */;
import _mod14629 from "module_14629" /* 14629 */;

let closure_2 = _mod14590([].push);

export default (arg0, arg1) => {
  const tmp = _mod14588(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14606;
    let tmp14Result = tmp14(_mod14628, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14606(tmp, key10010);
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
    if (_mod14606(tmp, tmp7)) {
      let tmp5Result = _mod14629;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};