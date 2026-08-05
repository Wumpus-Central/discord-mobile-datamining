// _runtime/03562_differenceInMonths.js
import _typeof from "_typeof";
import differenceInCalendarMonths from "differenceInCalendarMonths";
import compareAsc from "compareAsc";
import requiredArgs from "requiredArgs";
import isLastDayOfMonth from "isLastDayOfMonth";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!differenceInCalendarMonths) {
  obj = { default: null };
  obj[0] = differenceInCalendarMonths;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarMonths;
}
let closure_1 = tmp5;
if (!compareAsc) {
  obj = { default: null };
  obj[0] = compareAsc;
  let tmp7 = obj;
} else {
  tmp7 = compareAsc;
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
if (!isLastDayOfMonth) {
  const obj2 = { default: null };
  obj2[0] = isLastDayOfMonth;
  let tmp11 = obj2;
} else {
  tmp11 = isLastDayOfMonth;
}
let c4 = tmp11;

export default function differenceInMonths(date, friendsSince) {
  tmp9.default(2, arguments);
  const defaultResult1 = tmp3.default(date);
  const defaultResult2 = tmp3.default(friendsSince);
  const defaultResult3 = tmp7.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(tmp5.default(defaultResult1, defaultResult2));
  let num = 0;
  if (absolute >= 1) {
    tmp5 = 1 === defaultResult1.getMonth();
    if (tmp5) {
      tmp5 = defaultResult1.getDate() > 27;
    }
    if (tmp5) {
      defaultResult1.setDate(30);
    }
    defaultResult1.setMonth(defaultResult1.getMonth() - defaultResult3 * absolute);
    tmp11 = tmp11.default(tmp3.default(date)) && 1 === absolute && 1 === obj3.default(date, defaultResult2);
    let flag = obj3.default(defaultResult1, defaultResult2) === tmp9;
    if (tmp11) {
      flag = false;
    }
    const _Number = Number;
    num = defaultResult3 * (absolute - Number(flag));
    const defaultResult4 = obj3.default(defaultResult1, defaultResult2);
  }
  let num4 = 0;
  if (0 !== num) {
    num4 = num;
  }
  return num4;
};
export default exports.default;