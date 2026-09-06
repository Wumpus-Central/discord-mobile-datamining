// _runtime/03888_startOfUTCISOWeekYear.js
import getUTCISOWeekYear from "03889_getUTCISOWeekYear.js";
import startOfUTCISOWeek from "03887_startOfUTCISOWeek.js";
import requiredArgs from "03651_requiredArgs.js";

if (!getUTCISOWeekYear) {
  let obj = { default: null };
  obj[0] = getUTCISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getUTCISOWeekYear;
}
getUTCISOWeekYear = tmp3;
if (!startOfUTCISOWeek) {
  obj = { default: null };
  obj[0] = startOfUTCISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfUTCISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(getUTCISOWeekYear.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;