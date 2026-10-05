// === Module 4224: getDaysInYear ===

// Module 4224 (getDaysInYear)
import toDate_mod from "toDate" /* 3958 */;
import isLeapYear_mod from "isLeapYear" /* 4225 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let tmp5;
let tmp7;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let isLeapYear = isLeapYear_mod;
if (!isLeapYear) {
  tmp5 = { default: isLeapYear };
  const obj2 = { default: isLeapYear };
} else {
  tmp5 = isLeapYear;
}
isLeapYear = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function getDaysInYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const date = new Date(defaultResult1);
  if ("Invalid Date" === String(date)) {
    return NaN;
  } else {
    let num = 365;
    if (isLeapYear.default(defaultResult1)) {
      num = 366;
    }
    return num;
  }
};