// _runtime/metro/15250__.js
import _mod15211 from "15211__.js";
import _mod15213 from "15213__.js";
import _mod15229 from "15229__.js";
import _mod15251 from "15251__.js";
import _mod15252 from "15252__.js";

let closure_2 = _mod15213([].push);

export default (arg0, arg1) => {
  const tmp = _mod15211(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15229;
    let tmp14Result = tmp14(_mod15251, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15229(tmp, key10010);
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
    if (_mod15229(tmp, tmp7)) {
      let tmp5Result = _mod15252;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
