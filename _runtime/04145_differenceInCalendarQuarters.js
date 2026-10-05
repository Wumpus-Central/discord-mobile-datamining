// _runtime/04145_differenceInCalendarQuarters.js
import getQuarter_mod from "04146_getQuarter.js";
import toDate_mod from "03958_toDate.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let tmp3;
let tmp5;
let tmp7;
let getQuarter = getQuarter_mod;
if (!getQuarter) {
  tmp3 = { default: getQuarter };
  const obj = { default: getQuarter };
} else {
  tmp3 = getQuarter;
}
getQuarter = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function differenceInCalendarQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toDate.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  const defaultResult3 = getQuarter.default(defaultResult1);
  return 4 * diff + (defaultResult3 - getQuarter.default(defaultResult2));
}
