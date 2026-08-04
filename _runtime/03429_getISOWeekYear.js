// _runtime/03429_getISOWeekYear.js
import _typeof from "_typeof";
import startOfISOWeek from "startOfISOWeek";
import requiredArgs from "requiredArgs";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!startOfISOWeek) {
  obj = { default: null };
  obj[0] = startOfISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function getISOWeekYear(arg0) {
  tmp7.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const date = new Date(0);
  date.setFullYear(fullYear + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const date1 = new Date(0);
  date1.setFullYear(fullYear, 0, 4);
  date1.setHours(0, 0, 0, 0);
  const defaultResult2 = tmp5.default(date);
  const time = defaultResult1.getTime();
  if (time >= defaultResult2.getTime()) {
    let sum = fullYear + 1;
  } else {
    const time1 = defaultResult1.getTime();
    sum = fullYear;
    if (time1 < defaultResult3.getTime()) {
      sum = fullYear - 1;
    }
  }
  return sum;
};
export default exports.default;