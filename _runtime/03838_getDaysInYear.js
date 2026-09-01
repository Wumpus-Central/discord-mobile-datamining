// === Module 3838: getDaysInYear ===

// Module 3838 (getDaysInYear)
import _typeof from "_typeof" /* 3572 */;
import isLeapYear from "isLeapYear" /* 3839 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!isLeapYear) {
  obj = { default: null };
  obj[0] = isLeapYear;
  let tmp5 = obj;
} else {
  tmp5 = isLeapYear;
}
isLeapYear = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getDaysInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = _typeof.default(arg0);
  if ("Invalid Date" === String(date)) {
    return NaN;
  } else {
    let num = 365;
    if (isLeapYear.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
  date = new Date(defaultResult1);
};
export default exports.default;