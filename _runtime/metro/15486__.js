// _runtime/metro/15486__.js
import _mod15447 from "15447__.js";
import _mod15449 from "15449__.js";
import _mod15465 from "15465__.js";
import _mod15487 from "15487__.js";
import _mod15488 from "15488__.js";

let closure_2 = _mod15449([].push);

export default (arg0, arg1) => {
  const tmp = _mod15447(arg0);
  const items = [];
  for (const key10010 in tmp) {
    let tmp14 = _mod15465;
    let tmp14Result = tmp14(_mod15487, key10010);
    let tmp2 = !tmp14Result;
    if (!tmp14Result) {
      tmp2 = _mod15465(tmp, key10010);
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
    if (_mod15465(tmp, tmp7)) {
      let tmp5Result = _mod15488;
      if (!~tmp5Result.indexOf(items, tmp7)) {
        let tmp10 = closure_2(items, tmp7);
      }
    }
  }
  return items;
};
