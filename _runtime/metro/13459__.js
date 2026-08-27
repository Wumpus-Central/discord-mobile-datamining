// === Module 13459: ? ===

// Module 13459
import closure_2 from "_slicedToArray" /* 32 */;


export default (arr) => {
  let tmp = arg1;
  const _require = arg2;
  const items = [];
  let tmp2 = null;
  let tmp3 = null;
  const sorted = arr.sort((arg0, arg1) => callback(closure_1_1[1])(arg0, arg1, callback));
  for (const item10017 of sorted) {
    let tmp5 = item10017;
    let tmp6 = _require;
    let tmp7 = dependencyMap;
    if (_require(13449)(item10017, tmp, arg2)) {
      tmp3 = item10017;
      let tmp12 = tmp2;
      if (!tmp2) {
        tmp2 = item10017;
      }
    } else {
      let tmp8 = tmp3;
      if (tmp3) {
        let tmp9 = tmp2;
        let items1 = [tmp2, ];
        let tmp10 = tmp3;
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
    items.push(items2);
  }
  const items3 = [];
  while (tmp15 !== undefined) {
    let tmp17 = callback;
    let tmp18 = callback(tmp16, 2);
    let first = tmp18[0];
    let tmp20 = first;
    let tmp21 = tmp18[1];
    let tmp22 = tmp21;
    if (first === tmp21) {
      let tmp34 = first;
      let arr1 = items3.push(tmp20);
    } else {
      let tmp36 = tmp21;
      if (!tmp22) {
        let tmp23 = first;
        if (tmp20 === sorted[0]) {
          let arr2 = items3.push("*");
        }
      }
      let tmp25 = tmp21;
      if (tmp22) {
        let tmp28 = first;
        if (tmp20 === sorted[0]) {
          let tmp32 = tmp21;
          let _HermesInternal3 = HermesInternal;
          let arr3 = items3.push("<=" + tmp22);
        } else {
          let tmp29 = first;
          let tmp30 = tmp21;
          let _HermesInternal2 = HermesInternal;
          let arr4 = items3.push("" + tmp20 + " - " + tmp22);
        }
      } else {
        let tmp26 = first;
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