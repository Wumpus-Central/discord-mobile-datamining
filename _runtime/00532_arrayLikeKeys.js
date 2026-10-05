// === Module 532: arrayLikeKeys ===

// Module 532 (arrayLikeKeys)
import _mod514 from "module_514" /* 514 */;
import baseIsArguments from "baseIsArguments" /* 533 */;
import _mod536 from "module_536" /* 536 */;
import _mod538 from "module_538" /* 538 */;
import baseTimes from "baseTimes" /* 542 */;
import isIndex from "isIndex" /* 543 */;


export default function arrayLikeKeys(obj, arg1) {
  let items;
  const tmp3 = _mod514(obj);
  const tmp4 = !tmp3 && baseIsArguments(obj);
  const tmp5 = !tmp3 && !tmp4 && _mod536(obj);
  const tmp6 = !tmp3 && !tmp4 && !tmp5 && _mod538(obj);
  if (tmp3 || tmp4 || tmp5 || tmp6) {
    const _String = String;
    items = baseTimes(obj.length, String);
  } else {
    items = [];
  }
  for (const key10033 in obj) {
    let tmp10 = !arg1 && !hasOwnProperty.call(obj, key10033);
    if (!tmp10) {
      let tmp11 = tmp7;
      if (tmp11) {
        let tmp12 = "length" == key10033;
        if (!tmp12) {
          let tmp13 = tmp5;
          if (tmp13) {
            let tmp14 = "offset" == key10033 || "parent" == key10033;
            tmp13 = tmp14;
          }
          tmp12 = tmp13;
        }
        if (!tmp12) {
          let tmp15 = tmp6;
          if (tmp15) {
            let tmp16 = "buffer" == key10033 || "byteLength" == key10033 || "byteOffset" == key10033;
            tmp15 = tmp16;
          }
          tmp12 = tmp15;
        }
        if (!tmp12) {
          tmp12 = isIndex(key10033, tmp9);
        }
        tmp11 = tmp12;
      }
      tmp10 = tmp11;
    }
    if (tmp10) {
      continue;
    } else {
      let arr = items.push(key10033);
      continue;
    }
    continue;
  }
  return items;
};