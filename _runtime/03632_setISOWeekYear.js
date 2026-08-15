// _runtime/03632_setISOWeekYear.js
import toInteger from "toInteger";
import _typeof from "_typeof";
import startOfISOWeekYear from "startOfISOWeekYear";
import differenceInCalendarDays from "differenceInCalendarDays";
import requiredArgs from "requiredArgs";

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
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
if (!startOfISOWeekYear) {
  obj = { default: null };
  obj[0] = startOfISOWeekYear;
  let tmp7 = obj;
} else {
  tmp7 = startOfISOWeekYear;
}
let obj1 = tmp7;
if (!differenceInCalendarDays) {
  obj1 = { default: null };
  obj1[0] = differenceInCalendarDays;
  let tmp9 = obj1;
} else {
  tmp9 = differenceInCalendarDays;
}
let c3 = tmp9;
if (!requiredArgs) {
  const obj2 = { default: null };
  obj2[0] = requiredArgs;
  let tmp11 = obj2;
} else {
  tmp11 = requiredArgs;
}
let c4 = tmp11;

export default function setISOWeekYear(arg0, arg1) {
  tmp11.default(2, arguments);
  const defaultResult1 = tmp5.default(arg0);
  const defaultResult2 = tmp3.default(arg1);
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = tmp7.default(date);
  defaultResult4.setDate(defaultResult4.getDate() + tmp9.default(defaultResult1, tmp7.default(defaultResult1)));
  return defaultResult4;
};
export default exports.default;