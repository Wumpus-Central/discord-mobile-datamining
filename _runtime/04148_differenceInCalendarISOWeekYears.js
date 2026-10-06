// _runtime/04148_differenceInCalendarISOWeekYears.js
import getISOWeekYear_mod from "04121_getISOWeekYear.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let getISOWeekYear = getISOWeekYear_mod;
if (!getISOWeekYear) {
  tmp3 = { default: getISOWeekYear };
  const obj = { default: getISOWeekYear };
} else {
  tmp3 = getISOWeekYear;
}
getISOWeekYear = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInCalendarISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = getISOWeekYear.default(arg0);
  return defaultResult1 - getISOWeekYear.default(arg1);
}
