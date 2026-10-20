// === Module 15414: ? ===

// Module 15414
import _mod15375 from "module_15375" /* 15375 */;
import _mod15377 from "module_15377" /* 15377 */;
import _mod15393 from "module_15393" /* 15393 */;
import _mod15415 from "module_15415" /* 15415 */;
import _mod15416 from "module_15416" /* 15416 */;

let closure_2 = _mod15377([].push);

export default (arg0, arg1) => {
  const tmp = _mod15375(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15393;
    let tmp14Result = tmp14(_mod15415, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15393(tmp, key10010);
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
    if (_mod15393(tmp, tmp7)) {
      let tmp5Result = _mod15416;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};