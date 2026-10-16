// === Module 4496: startOfUTCISOWeekYear ===

// Module 4496 (startOfUTCISOWeekYear)
import module_4497_mod from "module_4497" /* 4497 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4495 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4497 = module_4497_mod;
if (!module_4497) {
  const obj = { default: module_4497 };
  let tmp3 = obj;
} else {
  tmp3 = module_4497;
}
module_4497 = tmp3;
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
  date.setUTCFullYear(module_4497.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;