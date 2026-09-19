// === Module 14615: ? ===

// Module 14615
import _mod14576 from "module_14576" /* 14576 */;
import _mod14578 from "module_14578" /* 14578 */;
import _mod14594 from "module_14594" /* 14594 */;
import _mod14616 from "module_14616" /* 14616 */;
import _mod14617 from "module_14617" /* 14617 */;

let closure_2 = _mod14578([].push);

export default (arg0, arg1) => {
  const tmp = _mod14576(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod14594;
    let tmp14Result = tmp14(_mod14616, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod14594(tmp, key10010);
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
    if (_mod14594(tmp, tmp7)) {
      let tmp5Result = _mod14617;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};