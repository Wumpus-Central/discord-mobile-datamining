// _runtime/04371_setMonth.js
import toInteger_mod from "03962_toInteger.js";
import toDate_mod from "03958_toDate.js";
import getDaysInMonth_mod from "04223_getDaysInMonth.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp3 = { default: toInteger };
  const obj = { default: toInteger };
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let getDaysInMonth = getDaysInMonth_mod;
if (!getDaysInMonth) {
  tmp7 = { default: getDaysInMonth };
  const obj3 = { default: getDaysInMonth };
} else {
  tmp7 = getDaysInMonth;
}
getDaysInMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setMonth(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const date = defaultResult1.getDate();
  const date1 = new Date(0);
  date1.setFullYear(fullYear, defaultResult2, 15);
  date1.setHours(0, 0, 0, 0);
  defaultResult1.setMonth(defaultResult2, Math.min(date, getDaysInMonth.default(date1)));
  return defaultResult1;
}
