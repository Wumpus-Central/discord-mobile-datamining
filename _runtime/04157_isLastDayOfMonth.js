// _runtime/04157_isLastDayOfMonth.js
import toDate_mod from "03958_toDate.js";
import endOfDay_mod from "04158_endOfDay.js";
import endOfMonth_mod from "04159_endOfMonth.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let endOfDay = endOfDay_mod;
if (!endOfDay) {
  tmp5 = { default: endOfDay };
  const obj2 = { default: endOfDay };
} else {
  tmp5 = endOfDay;
}
endOfDay = tmp5;
let endOfMonth = endOfMonth_mod;
if (!endOfMonth) {
  tmp7 = { default: endOfMonth };
  const obj3 = { default: endOfMonth };
} else {
  tmp7 = endOfMonth;
}
endOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function isLastDayOfMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = endOfDay.default(defaultResult1);
  const time = defaultResult2.getTime();
  const defaultResult3 = endOfMonth.default(defaultResult1);
  return time === defaultResult3.getTime();
}
