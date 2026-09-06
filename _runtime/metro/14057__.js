// === Module 14057: ? ===

// Module 14057
import _mod14030 from "module_14030" /* 14030 */;
import _slicedToArray from "module_32" /* 32 */;


export default (arr, arg1, arg2) => {
  let tmp = arg1;
  _require = arg2;
  const items = [];
  let tmp2 = null;
  let tmp3 = null;
  const sorted = arr.sort((arg0, arg1) => _mod14030(arg0, arg1, closure_0));
  for (const item10017 of sorted) {
    if (require("module_14047")(item10017, tmp, arg2)) {
      tmp3 = item10017;
      if (!tmp2) {
        tmp2 = item10017;
      }
    } else {
      if (tmp3) {
        let items1 = [tmp2, ];
        items1[1] = tmp3;
        arr = items.push(items1);
      }
      tmp3 = null;
      tmp2 = null;
    }
    continue;
  }
  if (tmp2) {
    const items2 = [tmp2, null];
    arr = items.push(items2);
  }
  const items3 = [];
  while (tmp15 !== undefined) {
    let tmp18 = _slicedToArray(tmp16, 2);
    let first = tmp18[0];
    let tmp20 = first;
    let tmp21 = tmp18[1];
    let tmp22 = tmp21;
    if (first === tmp21) {
      let arr1 = items3.push(tmp20);
    } else {
      if (!tmp22) {
        if (tmp20 === sorted[0]) {
          let arr2 = items3.push("*");
        }
      }
      if (tmp22) {
        if (tmp20 === sorted[0]) {
          let _HermesInternal3 = HermesInternal;
          let arr3 = items3.push("<=" + tmp22);
        } else {
          let _HermesInternal2 = HermesInternal;
          let arr4 = items3.push("" + tmp20 + " - " + tmp22);
        }
      } else {
        let _HermesInternal = HermesInternal;
        let arr5 = items3.push(">=" + tmp20);
      }
    }
    continue;
  }
  const joined = items3.join(" || ");
  if (typeof tmp.raw === "string") {
    let raw = tmp.raw;
  } else {
    const _String = String;
    raw = String(tmp);
  }
  if (joined.length < raw.length) {
    tmp = joined;
  }
  return tmp;
};