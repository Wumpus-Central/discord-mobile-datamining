// _runtime/03588_endOfISOWeekYear.js
import getISOWeekYear from "getISOWeekYear";
import startOfISOWeek from "startOfISOWeek";
import requiredArgs from "requiredArgs";

if (!getISOWeekYear) {
  let obj = { default: null };
  obj[0] = getISOWeekYear;
  let tmp3 = obj;
} else {
  tmp3 = getISOWeekYear;
}
let c0 = tmp3;
if (!startOfISOWeek) {
  obj = { default: null };
  obj[0] = startOfISOWeek;
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
let closure_1 = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}

export default function endOfISOWeekYear(arg0) {
  tmp7.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(tmp3.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = tmp5.default(date);
  defaultResult2.setMilliseconds(defaultResult2.getMilliseconds() - 1);
  return defaultResult2;
};
export default exports.default;