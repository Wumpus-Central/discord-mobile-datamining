// _runtime/04007_differenceInCalendarDays.js
import module_4008_mod from "metro/04008__.js";
import startOfDay_mod from "04009_startOfDay.js";
import requiredArgs_mod from "03846_requiredArgs.js";

let module_4008 = module_4008_mod;
if (!module_4008) {
  const obj = { default: module_4008 };
  let tmp3 = obj;
} else {
  tmp3 = module_4008;
}
module_4008 = tmp3;
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

export default function differenceInCalendarDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const defaultResult2 = startOfDay.default(arg1);
  const time = defaultResult1.getTime();
  const diff = time - module_4008.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4008.default(defaultResult2))) / c3);
};
export default exports.default;