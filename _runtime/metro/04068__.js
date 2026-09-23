// === Module 4068: ? ===

// Module 4068
import _typeof_mod from "module_3911" /* 3911 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4069 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  const obj2 = { default: startOfISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const date = new Date(0);
  date.setFullYear(fullYear + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const date1 = new Date(0);
  date1.setFullYear(fullYear, 0, 4);
  date1.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
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