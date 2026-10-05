// _runtime/04170_startOfQuarter.js
import toDate_mod from "03958_toDate.js";
import requiredArgs_mod from "03959_requiredArgs.js";

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

export default function startOfQuarter(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - (month % 3), 1);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
}
