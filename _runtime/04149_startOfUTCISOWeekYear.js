// === Module 4149: startOfUTCISOWeekYear ===

// Module 4149 (startOfUTCISOWeekYear)
import module_4150_mod from "module_4150" /* 4150 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4148 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4150 = module_4150_mod;
if (!module_4150) {
  const obj = { default: module_4150 };
  let tmp3 = obj;
} else {
  tmp3 = module_4150;
}
module_4150 = tmp3;
let startOfUTCISOWeek = startOfUTCISOWeek_mod;
if (!startOfUTCISOWeek) {
  const obj2 = { default: startOfUTCISOWeek };
  let tmp5 = obj2;
} else {
  tmp5 = startOfUTCISOWeek;
}
startOfUTCISOWeek = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function startOfUTCISOWeekYear(arg0) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(module_4150.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;