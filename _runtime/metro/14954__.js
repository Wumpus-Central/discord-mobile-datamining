// === Module 14954: ? ===

// Module 14954
import _mod14915 from "module_14915" /* 14915 */;
import _mod14917 from "module_14917" /* 14917 */;
import _mod14933 from "module_14933" /* 14933 */;
import _mod14955 from "module_14955" /* 14955 */;
import _mod14956 from "module_14956" /* 14956 */;

let closure_2 = _mod14917([].push);

export default (arg0, arg1) => {
  const tmp = _mod14915(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14933;
    let tmp14Result = tmp14(_mod14955, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14933(tmp, key10010);
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
    if (_mod14933(tmp, tmp7)) {
      let tmp5Result = _mod14956;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};