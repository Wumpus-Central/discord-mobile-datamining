// _runtime/metro/15396__.js
import _mod15357 from "15357__.js";
import _mod15359 from "15359__.js";
import _mod15375 from "15375__.js";
import _mod15397 from "15397__.js";
import _mod15398 from "15398__.js";

let closure_2 = _mod15359([].push);

export default (arg0, arg1) => {
  const tmp = _mod15357(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15375;
    let tmp14Result = tmp14(_mod15397, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15375(tmp, key10010);
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
    if (_mod15375(tmp, tmp7)) {
      let tmp5Result = _mod15398;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
