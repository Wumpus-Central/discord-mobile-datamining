// _runtime/metro/14615__.js
import _mod14576 from "14576__.js";
import _mod14578 from "14578__.js";
import _mod14594 from "14594__.js";
import _mod14616 from "14616__.js";
import _mod14617 from "14617__.js";

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
