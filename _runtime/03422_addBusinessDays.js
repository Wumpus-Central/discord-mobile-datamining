// _runtime/03422_addBusinessDays.js
import isWeekend from "isWeekend";
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";
import isSunday from "isSunday";
import isSaturday from "isSaturday";

if (!isWeekend) {
  let obj = { default: null };
  obj[0] = isWeekend;
  let tmp3 = obj;
} else {
  tmp3 = isWeekend;
}
let c0 = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
let closure_1 = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
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
if (!isSunday) {
  let obj2 = { default: null };
  obj2[0] = isSunday;
  let tmp11 = obj2;
} else {
  tmp11 = isSunday;
}
let c4 = tmp11;
if (!isSaturday) {
  let obj3 = { default: null };
  obj3[0] = isSaturday;
  let tmp13 = obj3;
} else {
  tmp13 = isSaturday;
}
let c5 = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  let tmp9;
  tmp9.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  let obj2 = tmp3;
  let defaultResult2 = tmp3.default(defaultResult1);
  const defaultResult3 = tmp7.default(arg1);
  if (isNaN(defaultResult3)) {
    const _Date = Date;
    const date = new Date(NaN);
    return date;
  } else {
    let num3 = 1;
    const hours = defaultResult1.getHours();
    if (defaultResult3 < 0) {
      num3 = -1;
    }
    defaultResult1.setDate(defaultResult1.getDate() + 7 * obj3.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        tmp9 = tmp3;
        let tmp10 = absolute;
        diff = absolute;
        if (!tmp3.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = tmp9;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = obj2.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (tmp13.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (tmp11.default(defaultResult1)) {
        let num7 = -2;
        if (num3 < 0) {
          num7 = 1;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num7);
        const date2 = defaultResult1.getDate();
      }
    }
    defaultResult1.setHours(hours);
    return defaultResult1;
  }
  obj3 = tmp7;
};
export default exports.default;