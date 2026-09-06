// === Module 532: arrayLikeKeys ===

// Module 532 (arrayLikeKeys)
import _mod514 from "module_514" /* 514 */;
import isIndex from "isIndex" /* 543 */;


export default function arrayLikeKeys(obj) {
  const tmp3 = _mod514(obj);
  let tmp4 = !tmp3;
  if (!tmp3) {
    tmp4 = tmp(533)(obj);
  }
  let tmp5 = !tmp3;
  if (!tmp3) {
    tmp5 = !tmp4;
  }
  if (tmp5) {
    tmp5 = tmp(536)(obj);
  }
  let tmp6 = !tmp3;
  if (!tmp3) {
    tmp6 = !tmp4;
  }
  if (tmp6) {
    tmp6 = !tmp5;
  }
  if (tmp6) {
    tmp6 = tmp(538)(obj);
  }
  let tmp7 = tmp3;
  if (!tmp3) {
    tmp7 = tmp4;
  }
  if (!tmp7) {
    tmp7 = tmp5;
  }
  if (!tmp7) {
    tmp7 = tmp6;
  }
  if (tmp7) {
    const _String = String;
    let items = tmp(542)(obj.length, String);
  } else {
    items = [];
  }
  for (const key10033 in arg0) {
    let tmp23 = key10033;
    let tmp21 = !arg1;
    if (arg1) {
      if (!tmp21) {
        let tmp13 = tmp7;
        if (tmp7) {
          let tmp14 = "length" == key10033;
          if (!tmp14) {
            let tmp15 = tmp5;
            if (tmp5) {
              let tmp16 = "offset" == key10033;
              if (!tmp16) {
                tmp16 = "parent" == key10033;
              }
              tmp15 = tmp16;
            }
            tmp14 = tmp15;
          }
          if (!tmp14) {
            let tmp17 = tmp6;
            if (tmp6) {
              let tmp18 = "buffer" == key10033;
              if (!tmp18) {
                tmp18 = "byteLength" == key10033;
              }
              if (!tmp18) {
                tmp18 = "byteOffset" == key10033;
              }
              tmp17 = tmp18;
            }
            tmp14 = tmp17;
          }
          if (!tmp14) {
            let tmp19 = require;
            let tmp20 = dependencyMap;
            tmp14 = isIndex(key10033, tmp9);
          }
          tmp13 = tmp14;
        }
        tmp21 = tmp13;
      }
      if (tmp21) {
        continue;
      } else {
        let arr = items.push(key10033);
        continue;
      }
      continue;
    } else {
      let tmp10 = hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let callResult = tmp10(key10033);
      } else {
        callResult = call(arg0, key10033);
      }
      let tmp12 = !callResult;
    }
  }
  return items;
};