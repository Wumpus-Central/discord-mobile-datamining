// === Module 4229: getDaysInMonth ===

// Module 4229 (getDaysInMonth)
import toDate_mod from "toDate" /* 3964 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getDaysInMonth(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const month = defaultResult1.getMonth();
  const date = new Date(0);
  date.setFullYear(fullYear, month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date.getDate();
};