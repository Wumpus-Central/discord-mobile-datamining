// _runtime/03878_differenceInCalendarISOWeeks.js
import 03856__ from "metro/03856__.js";
import startOfISOWeek from "03851_startOfISOWeek.js";
import requiredArgs from "03694_requiredArgs.js";

if (!module_3856) {
  let obj = { default: module_3856 };
  let tmp3 = obj;
} else {
  tmp3 = module_3856;
}
module_3856 = tmp3;
if (!startOfISOWeek) {
  obj = { default: startOfISOWeek };
  let tmp5 = obj;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function differenceInCalendarISOWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfISOWeek.default(arg0);
  const defaultResult2 = startOfISOWeek.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - module_3856.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3856.default(defaultResult2))) / c3);
};
export default exports.default;