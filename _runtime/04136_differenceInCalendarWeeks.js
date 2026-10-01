// _runtime/04136_differenceInCalendarWeeks.js
import startOfWeek_mod from "04106_startOfWeek.js";
import module_4110_mod from "metro/04110__.js";
import requiredArgs_mod from "03948_requiredArgs.js";

let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  const obj = { default: startOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let module_4110 = module_4110_mod;
if (!module_4110) {
  const obj2 = { default: module_4110 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4110;
}
module_4110 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
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
  const diff = time - module_4110.default(defaultResult1);
  const time1 = defaultResult2.getTime();
  return Math.round((diff - (time1 - module_4110.default(defaultResult2))) / c3);
};
export default exports.default;