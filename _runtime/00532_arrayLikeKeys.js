// === Module 532: arrayLikeKeys ===

// Module 532 (arrayLikeKeys)
import _mod514 from "module_514" /* 514 */;
import baseIsArguments from "baseIsArguments" /* 533 */;
import _mod536 from "module_536" /* 536 */;
import _mod538 from "module_538" /* 538 */;
import baseTimes from "baseTimes" /* 542 */;
import _mod543 from "module_543" /* 543 */;


export default function arrayLikeKeys(obj, arg1) {
  const tmp3 = _mod514(obj);
  let tmp4 = !tmp3;
  if (!tmp3) {
    tmp4 = baseIsArguments(obj);
  }
  let tmp5 = !tmp3;
  if (!tmp3) {
    tmp5 = !tmp4;
  }
  if (tmp5) {
    tmp5 = _mod536(obj);
  }
  let tmp6 = !tmp3;
  if (!tmp3) {
    tmp6 = !tmp4;
  }
  if (tmp6) {
    tmp6 = !tmp5;
  }
  if (tmp6) {
    tmp6 = _mod538(obj);
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
            tmp14 = _mod543(key10033, tmp9);
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
      let tmp12 = !callResult;
    }
  }
  return items;
};