// _runtime/04333_lastDayOfISOWeekYear.js
import module_4115_mod from "metro/04115__.js";
import startOfISOWeek_mod from "04116_startOfISOWeek.js";
import requiredArgs_mod from "03959_requiredArgs.js";

let module_4115 = module_4115_mod;
if (!module_4115) {
  const obj = { default: module_4115 };
  let tmp3 = obj;
} else {
  tmp3 = module_4115;
}
module_4115 = tmp3;
let startOfISOWeek = startOfISOWeek_mod;
if (!startOfISOWeek) {
  const obj2 = { default: startOfISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfISOWeek;
}
startOfISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function lastDayOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_4115.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setDate(defaultResult2.getDate() - 1);
  return defaultResult2;
};
export default exports.default;