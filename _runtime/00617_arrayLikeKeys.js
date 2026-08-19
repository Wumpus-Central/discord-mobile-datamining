// === Module 617: arrayLikeKeys ===

// Module 617 (arrayLikeKeys)
import _mod599 from "module_599" /* 599 */;
import baseIsArguments from "baseIsArguments" /* 618 */;
import isBuffer from "isBuffer" /* 621 */;
import _mod623 from "module_623" /* 623 */;
import baseTimes from "baseTimes" /* 627 */;
import isIndex from "isIndex" /* 628 */;


export default function arrayLikeKeys(obj) {
  const tmp3 = _mod599(obj);
  let tmp4 = !tmp3;
  if (!tmp3) {
    tmp4 = baseIsArguments(obj);
  }
  let tmp5 = !tmp3;
  if (!tmp3) {
    tmp5 = !tmp4;
  }
  if (tmp5) {
    tmp5 = isBuffer(obj);
  }
  let tmp6 = !tmp3;
  if (!tmp3) {
    tmp6 = !tmp4;
  }
  if (tmp6) {
    tmp6 = !tmp5;
  }
  if (tmp6) {
    tmp6 = _mod623(obj);
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
    let items = baseTimes(obj.length, String);
  } else {
    items = [];
  }
  for (const key10033 in arg0) {
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
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let callResult = hasOwnProperty(key10033);
      } else {
        callResult = call(arg0, key10033);
      }
    }
  }
  return items;
};