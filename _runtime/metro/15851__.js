// _runtime/metro/15851__.js
import _mod15812 from "15812__.js";
import _mod15814 from "15814__.js";
import _mod15830 from "15830__.js";
import _mod15852 from "15852__.js";
import _mod15853 from "15853__.js";

let closure_2 = _mod15814([].push);

export default (arg0, arg1) => {
  const tmp = _mod15812(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15830;
    let tmp14Result = tmp14(_mod15852, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15830(tmp, key10010);
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
    if (_mod15830(tmp, tmp7)) {
      let tmp5Result = _mod15853;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
