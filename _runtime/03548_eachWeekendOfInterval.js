// _runtime/03548_eachWeekendOfInterval.js
import eachDayOfInterval from "eachDayOfInterval";
import isSunday from "isSunday";
import isWeekend from "isWeekend";
import requiredArgs from "requiredArgs";

if (!eachDayOfInterval) {
  let obj = { default: null };
  obj[0] = eachDayOfInterval;
  let tmp3 = obj;
} else {
  tmp3 = eachDayOfInterval;
}
let c0 = tmp3;
if (!isSunday) {
  obj = { default: null };
  obj[0] = isSunday;
  let tmp5 = obj;
} else {
  tmp5 = isSunday;
}
let closure_1 = tmp5;
if (!isWeekend) {
  obj = { default: null };
  obj[0] = isWeekend;
  let tmp7 = obj;
} else {
  tmp7 = isWeekend;
}
let obj1 = tmp7;
if (!requiredArgs) {
  obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
let c3 = tmp9;

export default function eachWeekendOfInterval(arg0) {
  let tmp3;
  let tmp5;
  tmp9.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const items = [];
  let num = 0;
  if (0 < defaultResult1.length) {
    do {
      let sum = num + 1;
      tmp3 = defaultResult1[num];
      let tmp4 = tmp7;
      tmp5 = sum;
      if (tmp7.default(tmp3)) {
        let arr = items.push(tmp3);
        tmp7 = tmp5;
        let sum1 = sum;
        if (tmp5.default(tmp3)) {
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