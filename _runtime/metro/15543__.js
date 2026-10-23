// _runtime/metro/15543__.js
import _mod15504 from "15504__.js";
import _mod15506 from "15506__.js";
import _mod15522 from "15522__.js";
import _mod15544 from "15544__.js";
import _mod15545 from "15545__.js";

let closure_2 = _mod15506([].push);

export default (arg0, arg1) => {
  const tmp = _mod15504(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15522;
    let tmp14Result = tmp14(_mod15544, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15522(tmp, key10010);
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
    if (_mod15522(tmp, tmp7)) {
      let tmp5Result = _mod15545;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
