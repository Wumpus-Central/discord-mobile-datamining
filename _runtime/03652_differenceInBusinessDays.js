// _runtime/03652_differenceInBusinessDays.js
import addDays from "addDays";
import differenceInCalendarDays from "differenceInCalendarDays";
import isSameDay from "isSameDay";
import isValid from "isValid";
import isWeekend from "isWeekend";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
}
let c0 = tmp3;
if (!differenceInCalendarDays) {
  obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarDays;
}
let closure_1 = tmp5;
if (!isSameDay) {
  obj = { default: null };
  obj[0] = isSameDay;
  let tmp7 = obj;
} else {
  tmp7 = isSameDay;
}
let obj1 = tmp7;
if (!isValid) {
  obj1 = { default: null };
  obj1[0] = isValid;
  let tmp9 = obj1;
} else {
  tmp9 = isValid;
}
let c3 = tmp9;
if (!isWeekend) {
  const obj2 = { default: null };
  obj2[0] = isWeekend;
  let tmp11 = obj2;
} else {
  tmp11 = isWeekend;
}
let c4 = tmp11;
if (!_typeof) {
  const obj3 = { default: null };
  obj3[0] = _typeof;
  let tmp13 = obj3;
} else {
  tmp13 = _typeof;
}
let c5 = tmp13;
if (!requiredArgs) {
  const obj4 = { default: null };
  obj4[0] = requiredArgs;
  let tmp15 = obj4;
} else {
  tmp15 = requiredArgs;
}
let closure_6 = tmp15;
if (!toInteger) {
  const obj5 = { default: null };
  obj5[0] = toInteger;
  let tmp17 = obj5;
} else {
  tmp17 = toInteger;
}
const error = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  let tmp15;
  let tmp17;
  tmp15.default(2, arguments);
  const defaultResult1 = tmp13.default(arg0);
  const defaultResult2 = tmp13.default(arg1);
  if (tmp9.default(defaultResult1)) {
    if (tmp9.default(defaultResult2)) {
      const defaultResult3 = tmp5.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = tmp17.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      let defaultResult5 = tmp3.default(defaultResult2, 7 * defaultResult4);
      let sum = result;
      tmp13 = result;
      if (!tmp7.default(defaultResult1, defaultResult5)) {
        do {
          let tmp14 = tmp11;
          tmp15 = sum;
          let tmp16 = defaultResult5;
          let num5 = 0;
          if (!tmp11.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          tmp17 = tmp3;
          defaultResult6 = tmp3.default(defaultResult5, num2);
          let tmp19 = tmp7;
          defaultResult5 = defaultResult6;
          tmp13 = sum;
        } while (!tmp7.default(defaultResult1, defaultResult6));
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
export default exports.default;