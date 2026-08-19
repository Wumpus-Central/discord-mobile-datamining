// === Module 13717: items ===

// Module 13717 (items)
import _mod13678 from "module_13678" /* 13678 */;
import call from "call" /* 13680 */;
import call2 from "call" /* 13696 */;
import _mod13718 from "module_13718" /* 13718 */;
import _mod13719 from "module_13719" /* 13719 */;

let closure_2 = call([].push);

export default (arg0, arg1) => {
  const tmp = _mod13678(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = call2;
    let tmp14Result = tmp14(_mod13718, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = call2(tmp, key10010);
    }
    if (!tmp2) {
      continue;
    } else {
      let tmp4 = callback(items, key10010);
      continue;
    }
    continue;
  }
  for (let num = 0; arg1.length > num; num = num + 1) {
    let tmp7 = arg1[num];
    if (call2(tmp, tmp7)) {
      let tmp5Result = _mod13719;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = callback(items, tmp7);
      }
    }
  }
  return items;
};