// === Module 12423: conjureTipImpressions ===

// Module 12423 (conjureTipImpressions)
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/tips/conjureTipImpressions.tsx");

export function conjureTipShownAt(arg0, id) {
  return map.get("" + arg0 + ":" + id);
}
export function recordConjureTipImpression(arg0, id, timestamp) {
  const result = map.set("" + arg0 + ":" + id, timestamp);
}
export function countOwnMessagesSince(arr, conjureTipShownAtResult, stateFromStores) {
  let diff = arr.length - 1;
  let num = 0;
  if (0 <= diff) {
    let num2 = 0;
    num = 0;
    if (arr[diff].created_at > conjureTipShownAtResult) {
      while (true) {
        let tmp2 = arr[diff];
        let tmp3 = "user" !== tmp2.role;
        if (!tmp3) {
          let tmp6 = null != tmp2.user_id && tmp2.user_id !== stateFromStores;
          tmp3 = tmp6;
        }
        let sum = num2;
        if (!tmp3) {
          sum = num2 + 1;
        }
        let diff1 = diff - 1;
        num = sum;
        if (0 > diff1) {
          break;
        } else {
          diff = diff1;
          num2 = sum;
          num = sum;
          if (arr[diff1].created_at <= conjureTipShownAtResult) {
            break;
          }
        }
      }
    }
  }
  return num;
}
export function isConjureTipCoolingDown(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 > 0;
  }
  if (tmp) {
    tmp = arg0 < arg1;
  }
  return tmp;
}