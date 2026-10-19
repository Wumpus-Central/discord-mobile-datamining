// _runtime/metro/15368__.js
import _mod15329 from "15329__.js";
import _mod15331 from "15331__.js";
import _mod15347 from "15347__.js";
import _mod15369 from "15369__.js";
import _mod15370 from "15370__.js";

let closure_2 = _mod15331([].push);

export default (arg0, arg1) => {
  const tmp = _mod15329(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15347;
    let tmp14Result = tmp14(_mod15369, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15347(tmp, key10010);
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
    if (_mod15347(tmp, tmp7)) {
      let tmp5Result = _mod15370;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
