// _runtime/04479_endOfISOWeekYear.js
import module_4411_mod from "metro/04411__.js";
import startOfISOWeek_mod from "04412_startOfISOWeek.js";
import requiredArgs_mod from "04255_requiredArgs.js";

let module_4411 = module_4411_mod;
if (!module_4411) {
  const obj = { default: module_4411 };
  let tmp3 = obj;
} else {
  tmp3 = module_4411;
}
module_4411 = tmp3;
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

export default function endOfISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(module_4411.default(arg0) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setMilliseconds(defaultResult2.getMilliseconds() - 1);
  return defaultResult2;
};
export default exports.default;