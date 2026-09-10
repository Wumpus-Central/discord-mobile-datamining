// _runtime/03882_differenceInCalendarWeeks.js
import startOfWeek from "03852_startOfWeek.js";
import 03856__ from "metro/03856__.js";
import requiredArgs from "03694_requiredArgs.js";

if (!startOfWeek) {
  let obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
if (!module_3856) {
  obj = { default: module_3856 };
  let tmp5 = obj;
} else {
  tmp5 = module_3856;
}
module_3856 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 604800000;

export default function differenceInCalendarWeeks(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfWeek.default(arg0, arg2);
  const defaultResult2 = startOfWeek.default(arg1, arg2);
  const time = defaultResult1.getTime();
  const diff = time - module_3856.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3856.default(defaultResult2))) / c3);
};
export default exports.default;