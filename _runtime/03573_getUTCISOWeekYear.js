// === Module 3573: getUTCISOWeekYear ===

// Module 3573 (getUTCISOWeekYear)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import startOfUTCISOWeek from "startOfUTCISOWeek";

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
let c0 = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let closure_1 = tmp5;
if (!startOfUTCISOWeek) {
  obj = { default: null };
  obj[0] = startOfUTCISOWeek;
  let tmp7 = obj;
} else {
  tmp7 = startOfUTCISOWeek;
}

export default function getUTCISOWeekYear(arg0) {
  tmp5.default(1, arguments);
  const defaultResult1 = tmp3.default(arg0);
  const uTCFullYear = defaultResult1.getUTCFullYear();
  const date = new Date(0);
  date.setUTCFullYear(uTCFullYear + 1, 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  const date1 = new Date(0);
  date1.setUTCFullYear(uTCFullYear, 0, 4);
  date1.setUTCHours(0, 0, 0, 0);
  const defaultResult2 = tmp7.default(date);
  const time = defaultResult1.getTime();
  if (time >= defaultResult2.getTime()) {
    let sum = uTCFullYear + 1;
  } else {
    const time1 = defaultResult1.getTime();
    sum = uTCFullYear;
    if (time1 < defaultResult3.getTime()) {
      sum = uTCFullYear - 1;
    }
  }
  return sum;
};
export default exports.default;