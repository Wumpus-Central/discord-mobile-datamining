// _runtime/04108_addBusinessDays.js
import isWeekend_mod from "04109_isWeekend.js";
import toDate_mod from "03958_toDate.js";
import toInteger_mod from "03962_toInteger.js";
import requiredArgs_mod from "03959_requiredArgs.js";
import isSunday_mod from "04110_isSunday.js";
import isSaturday_mod from "04111_isSaturday.js";

let tmp11;
let tmp13;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let isWeekend = isWeekend_mod;
if (!isWeekend) {
  tmp3 = { default: isWeekend };
  const obj = { default: isWeekend };
} else {
  tmp3 = isWeekend;
}
isWeekend = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  let obj2 = { default: toDate };
  tmp5 = obj2;
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp7 = { default: toInteger };
  const obj3 = { default: toInteger };
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let isSunday = isSunday_mod;
if (!isSunday) {
  tmp11 = { default: isSunday };
  const obj5 = { default: isSunday };
} else {
  tmp11 = isSunday;
}
isSunday = tmp11;
let isSaturday = isSaturday_mod;
if (!isSaturday) {
  tmp13 = { default: isSaturday };
  const obj6 = { default: isSaturday };
} else {
  tmp13 = isSaturday;
}
isSaturday = tmp13;

export default function addBusinessDays(arg0, arg1) {
  let diff;
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  let obj2 = isWeekend;
  let defaultResult2 = isWeekend.default(defaultResult1);
  const defaultResult3 = toInteger.default(arg1);
  if (isNaN(defaultResult3)) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date(NaN);
    return date;
  } else {
    let num3 = 1;
    const hours = defaultResult1.getHours();
    if (defaultResult3 < 0) {
      num3 = -1;
    }
    const defaultResult4 = toInteger.default(defaultResult3 / 5);
    defaultResult1.setDate(defaultResult1.getDate() + 7 * defaultResult4);
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        diff = absolute;
        if (!isWeekend.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
        obj2 = isWeekend;
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
        const setDate = defaultResult1.setDate;
        let num6 = -1;
        const date1 = defaultResult1.getDate();
        if (num3 < 0) {
          num6 = 2;
        }
        setDate(date1 + num6);
      }
      if (isSunday.default(defaultResult1)) {
        const setDate2 = defaultResult1.setDate;
        let num7 = -2;
        const date2 = defaultResult1.getDate();
        if (num3 < 0) {
          num7 = 1;
        }
        setDate2(date2 + num7);
      }
    }
    defaultResult1.setHours(hours);
    return defaultResult1;
  }
}
