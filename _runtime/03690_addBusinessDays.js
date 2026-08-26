// === Module 3690: addBusinessDays ===

// Module 3690 (addBusinessDays)
import isWeekend from "isWeekend" /* 3691 */;
import _typeof from "_typeof" /* 3540 */;
import toInteger from "toInteger" /* 3544 */;
import requiredArgs from "requiredArgs" /* 3541 */;
import isSunday from "isSunday" /* 3692 */;
import isSaturday from "isSaturday" /* 3693 */;

if (!isWeekend) {
  let obj = { default: null };
  obj[0] = isWeekend;
  let tmp3 = obj;
} else {
  tmp3 = isWeekend;
}
isWeekend = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!toInteger) {
  obj = { default: null };
  obj[0] = toInteger;
  let tmp7 = obj;
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
if (!isSunday) {
  let obj2 = { default: null };
  obj2[0] = isSunday;
  let tmp11 = obj2;
} else {
  tmp11 = isSunday;
}
isSunday = tmp11;
if (!isSaturday) {
  let obj3 = { default: null };
  obj3[0] = isSaturday;
  let tmp13 = obj3;
} else {
  tmp13 = isSaturday;
}
isSaturday = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  let obj2 = isWeekend;
  let defaultResult2 = isWeekend.default(defaultResult1);
  const defaultResult3 = toInteger.default(arg1);
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
        let tmp9 = isWeekend;
        let tmp10 = absolute;
        diff = absolute;
        if (!isWeekend.default(defaultResult1)) {
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
      if (isSaturday.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (isSunday.default(defaultResult1)) {
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
  obj3 = toInteger;
};
export default exports.default;