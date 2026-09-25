// _runtime/04076_startOfISOWeekYear.js
import module_4072_mod from "metro/04072__.js";
import startOfISOWeek_mod from "04073_startOfISOWeek.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let module_4072 = module_4072_mod;
if (!module_4072) {
  const obj = { default: module_4072 };
  let tmp3 = obj;
} else {
  tmp3 = module_4072;
}
module_4072 = tmp3;
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

export default function startOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_4072.default(arg0), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;