// _runtime/03722_differenceInBusinessDays.js
import addDays from "03690_addDays.js";
import differenceInCalendarDays from "03704_differenceInCalendarDays.js";
import isSameDay from "03723_isSameDay.js";
import isValid from "03724_isValid.js";
import isWeekend from "03693_isWeekend.js";
import _typeof from "metro/03542__typeof.js";
import requiredArgs from "03543_requiredArgs.js";
import toInteger from "03546_toInteger.js";

if (!addDays) {
  let obj = { default: null };
  obj[0] = addDays;
  let tmp3 = obj;
} else {
  tmp3 = addDays;
}
addDays = tmp3;
if (!differenceInCalendarDays) {
  obj = { default: null };
  obj[0] = differenceInCalendarDays;
  let tmp5 = obj;
} else {
  tmp5 = differenceInCalendarDays;
}
differenceInCalendarDays = tmp5;
if (!isSameDay) {
  obj = { default: null };
  obj[0] = isSameDay;
  let tmp7 = obj;
} else {
  tmp7 = isSameDay;
}
isSameDay = tmp7;
if (!isValid) {
  const obj1 = { default: null };
  obj1[0] = isValid;
  let tmp9 = obj1;
} else {
  tmp9 = isValid;
}
isValid = tmp9;
if (!isWeekend) {
  const obj2 = { default: null };
  obj2[0] = isWeekend;
  let tmp11 = obj2;
} else {
  tmp11 = isWeekend;
}
isWeekend = tmp11;
if (!_typeof) {
  const obj3 = { default: null };
  obj3[0] = _typeof;
  let tmp13 = obj3;
} else {
  tmp13 = _typeof;
}
_typeof = tmp13;
if (!requiredArgs) {
  const obj4 = { default: null };
  obj4[0] = requiredArgs;
  let tmp15 = obj4;
} else {
  tmp15 = requiredArgs;
}
requiredArgs = tmp15;
if (!toInteger) {
  const obj5 = { default: null };
  obj5[0] = toInteger;
  let tmp17 = obj5;
} else {
  tmp17 = toInteger;
}
toInteger = tmp17;

export default function differenceInBusinessDays(arg0, arg1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
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
          let tmp14 = isWeekend;
          let tmp15 = sum;
          let tmp16 = defaultResult5;
          let num5 = 0;
          if (!isWeekend.default(defaultResult5)) {
            num5 = num2;
          }
          sum = sum + num5;
          let tmp17 = addDays;
          defaultResult6 = addDays.default(defaultResult5, num2);
          let tmp19 = isSameDay;
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
export default exports.default;