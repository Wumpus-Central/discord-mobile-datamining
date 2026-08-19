// === Module 3686: eachWeekendOfInterval ===

// Module 3686 (eachWeekendOfInterval)
import eachDayOfInterval from "eachDayOfInterval" /* 3678 */;
import isSunday from "isSunday" /* 3624 */;
import isWeekend from "isWeekend" /* 3623 */;
import requiredArgs from "requiredArgs" /* 3473 */;

if (!eachDayOfInterval) {
  let obj = { default: null };
  obj[0] = eachDayOfInterval;
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
if (!isSunday) {
  obj = { default: null };
  obj[0] = isSunday;
  let tmp5 = obj;
} else {
  tmp5 = isSunday;
}
isSunday = tmp5;
if (!isWeekend) {
  obj = { default: null };
  obj[0] = isWeekend;
  let tmp7 = obj;
} else {
  tmp7 = isWeekend;
}
isWeekend = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function eachWeekendOfInterval(arg0) {
  let tmp5;
  requiredArgs.default(1, arguments);
  const defaultResult1 = eachDayOfInterval.default(arg0);
  const items = [];
  let num = 0;
  if (0 < defaultResult1.length) {
    do {
      let sum = num + 1;
      let tmp3 = defaultResult1[num];
      tmp5 = sum;
      if (isWeekend.default(tmp3)) {
        let arr = items.push(tmp3);
        let sum1 = sum;
        if (isSunday.default(tmp3)) {
          sum1 = sum + 5;
        }
        tmp5 = sum1;
      }
      num = tmp5;
    } while (tmp5 < defaultResult1.length);
  }
  return items;
};
export default exports.default;