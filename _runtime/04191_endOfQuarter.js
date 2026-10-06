// === Module 4191: endOfQuarter ===

// Module 4191 (endOfQuarter)
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

export default function endOfQuarter(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3 + 3, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};