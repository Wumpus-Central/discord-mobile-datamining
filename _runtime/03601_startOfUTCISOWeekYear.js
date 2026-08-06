// _runtime/03601_startOfUTCISOWeekYear.js
import getUTCISOWeekYear from "getUTCISOWeekYear";
import startOfUTCISOWeek from "startOfUTCISOWeek";
import requiredArgs from "requiredArgs";

if (!getUTCISOWeekYear) {
  let obj = { default: null };
  obj[0] = getUTCISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getUTCISOWeekYear;
}
let c0 = tmp3;
if (!startOfUTCISOWeek) {
  obj = { default: null };
  obj[0] = startOfUTCISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfUTCISOWeek;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function startOfUTCISOWeekYear(arg0) {
  tmp7.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(tmp3.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return tmp5.default(date);
};
export default exports.default;