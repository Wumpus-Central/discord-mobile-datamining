// _runtime/04178_eachWeekendOfInterval.js
import eachDayOfInterval_mod from "04170_eachDayOfInterval.js";
import isSunday_mod from "04116_isSunday.js";
import isWeekend_mod from "04115_isWeekend.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let eachDayOfInterval = eachDayOfInterval_mod;
if (!eachDayOfInterval) {
  tmp3 = { default: eachDayOfInterval };
  const obj = { default: eachDayOfInterval };
} else {
  tmp3 = eachDayOfInterval;
}
eachDayOfInterval = tmp3;
let isSunday = isSunday_mod;
if (!isSunday) {
  tmp5 = { default: isSunday };
  const obj2 = { default: isSunday };
} else {
  tmp5 = isSunday;
}
isSunday = tmp5;
let isWeekend = isWeekend_mod;
if (!isWeekend) {
  tmp7 = { default: isWeekend };
  const obj3 = { default: isWeekend };
} else {
  tmp7 = isWeekend;
}
isWeekend = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
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
}
