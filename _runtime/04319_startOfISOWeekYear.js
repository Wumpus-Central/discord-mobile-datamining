// === Module 4319: startOfISOWeekYear ===

// Module 4319 (startOfISOWeekYear)
import module_4315_mod from "module_4315" /* 4315 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4316 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4315 = module_4315_mod;
if (!module_4315) {
  const obj = { default: module_4315 };
  let tmp3 = obj;
} else {
  tmp3 = module_4315;
}
module_4315 = tmp3;
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
  date.setFullYear(module_4315.default(arg0), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;