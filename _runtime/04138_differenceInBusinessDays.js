// === Module 4138: differenceInBusinessDays ===

// Module 4138 (differenceInBusinessDays)
import addDays_mod from "addDays" /* 4106 */;
import differenceInCalendarDays_mod from "differenceInCalendarDays" /* 4120 */;
import isSameDay_mod from "isSameDay" /* 4139 */;
import isValid_mod from "isValid" /* 4140 */;
import isWeekend_mod from "isWeekend" /* 4109 */;
import toDate_mod from "toDate" /* 3958 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;
import toInteger_mod from "toInteger" /* 3962 */;

let tmp11;
let tmp13;
let tmp15;
let tmp17;
let tmp3;
let tmp5;
let tmp7;
let tmp9;
let addDays = addDays_mod;
if (!addDays) {
  tmp3 = { default: addDays };
  const obj = { default: addDays };
} else {
  tmp3 = addDays;
}
addDays = tmp3;
let differenceInCalendarDays = differenceInCalendarDays_mod;
if (!differenceInCalendarDays) {
  tmp5 = { default: differenceInCalendarDays };
  const obj2 = { default: differenceInCalendarDays };
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
let isSameDay = isSameDay_mod;
if (!isSameDay) {
  tmp7 = { default: isSameDay };
  const obj3 = { default: isSameDay };
} else {
  tmp7 = isSameDay;
}
isSameDay = tmp7;
let isValid = isValid_mod;
if (!isValid) {
  tmp9 = { default: isValid };
  const obj4 = { default: isValid };
} else {
  tmp9 = isValid;
}
isValid = tmp9;
let isWeekend = isWeekend_mod;
if (!isWeekend) {
  tmp11 = { default: isWeekend };
  const obj5 = { default: isWeekend };
} else {
  tmp11 = isWeekend;
}
isWeekend = tmp11;
let toDate = toDate_mod;
if (!toDate) {
  tmp13 = { default: toDate };
  const obj6 = { default: toDate };
} else {
  tmp13 = toDate;
}
toDate = tmp13;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp15 = { default: requiredArgs };
  const obj7 = { default: requiredArgs };
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp17 = { default: toInteger };
  const obj8 = { default: toInteger };
} else {
  tmp17 = toInteger;
}
toInteger = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  if (isValid.default(defaultResult1)) {
    if (isValid.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = toInteger.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = addDays.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      let tmp13 = result;
      if (!isSameDay.default(defaultResult1, defaultResult5)) {
        do {
          let num5 = 0;
          if (!isWeekend.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          defaultResult6 = addDays.default(defaultResult5, num2);
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!isSameDay.default(defaultResult1, defaultResult6));
      }
      let num6 = 0;
      if (0 !== tmp13) {
        num6 = tmp13;
      }
      return num6;
    }
  }
  return NaN;
};