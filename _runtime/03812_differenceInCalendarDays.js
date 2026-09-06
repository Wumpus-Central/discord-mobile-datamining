// _runtime/03812_differenceInCalendarDays.js
import 03813__ from "metro/03813__.js";
import startOfDay from "03814_startOfDay.js";
import requiredArgs from "03651_requiredArgs.js";

if (!module_3813) {
  let obj = { default: module_3813 };
  let tmp3 = obj;
} else {
  tmp3 = module_3813;
}
module_3813 = tmp3;
if (!startOfDay) {
  obj = { default: startOfDay };
  let tmp5 = obj;
} else {
  tmp5 = startOfDay;
}
startOfDay = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 86400000;

export default function differenceInCalendarDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const defaultResult2 = startOfDay.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - module_3813.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_3813.default(defaultResult2))) / c3);
};
export default exports.default;