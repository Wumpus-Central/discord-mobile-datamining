// _runtime/04451_differenceInCalendarDays.js
import module_4452_mod from "metro/04452__.js";
import startOfDay_mod from "04453_startOfDay.js";
import requiredArgs_mod from "04290_requiredArgs.js";

let module_4452 = module_4452_mod;
if (!module_4452) {
  const obj = { default: module_4452 };
  let tmp3 = obj;
} else {
  tmp3 = module_4452;
}
module_4452 = tmp3;
let startOfDay = startOfDay_mod;
if (!startOfDay) {
  const obj2 = { default: startOfDay };
  let tmp5 = obj2;
} else {
  tmp5 = startOfDay;
}
startOfDay = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 86400000;

export default function differenceInCalendarDays(date1, date2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(date1);
  const defaultResult2 = startOfDay.default(date2);
  const time = defaultResult1.getTime();
  const diff = time - module_4452.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4452.default(defaultResult2))) / c3);
};
export default exports.default;