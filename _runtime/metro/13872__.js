// _runtime/metro/13872__.js
import _mod13845 from "13845__.js";
import _slicedToArray from "00032__slicedToArray.js";

const require = globalThis.__r;
let _require;

export default (arr, arg1, arg2) => {
  let closure_0;
  let first;
  let raw;
  let tmp22;
  let tmp = arg1;
  _require = arg2;
  const items = [];
  let tmp2 = null;
  let tmp3 = null;
  const sorted = arr.sort((arg0, arg1) => _mod13845(arg0, arg1, closure_0));
  for (const item10017 of sorted) {
    if (require("13862__.js")(item10017, tmp, arg2)) {
      tmp3 = item10017;
      let tmp12 = tmp2;
      if (!tmp12) {
        tmp2 = item10017;
      }
    } else {
      let tmp8 = tmp3;
      if (tmp8) {
        let items1 = [tmp2];
        items1[1] = tmp3;
        arr = items.push(items1);
      }
      tmp3 = null;
      tmp2 = null;
    }
    continue;
  }
  const tmp13 = tmp2;
  if (tmp13) {
    const items2 = [tmp2, null];
    items.push(items2);
  }
  const items3 = [];
  const tmp16 = items[Symbol.iterator]();
  while (tmp16 !== undefined) {
    [first, tmp22] = tmp17;
    let tmp21 = first;
    let tmp23 = tmp22;
    if (first === tmp22) {
      let arr3 = items3.push(tmp21);
    } else {
      if (!tmp23) {
        if (tmp21 === sorted[0]) {
          let arr4 = items3.push("*");
        }
      }
      if (tmp23) {
        if (tmp21 === sorted[0]) {
          let _HermesInternal3 = HermesInternal;
          let arr5 = items3.push("<=" + tmp23);
        } else {
          let _HermesInternal2 = HermesInternal;
          let arr6 = items3.push("" + tmp21 + " - " + tmp23);
        }
      } else {
        let _HermesInternal = HermesInternal;
        let arr13 = items3.push(">=" + tmp21);
      }
    }
    continue;
  }
  const joined = items3.join(" || ");
  if (typeof tmp.raw === "string") {
    raw = tmp.raw;
  } else {
    const _String = String;
    raw = String(tmp);
  }
  if (joined.length < raw.length) {
    tmp = joined;
  }
  return tmp;
};
