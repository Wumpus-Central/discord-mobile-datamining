// === Module 4660: startOfUTCISOWeekYear ===

// Module 4660 (startOfUTCISOWeekYear)
import module_4661_mod from "module_4661" /* 4661 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4659 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let module_4661 = module_4661_mod;
if (!module_4661) {
  const obj = { default: module_4661 };
  let tmp3 = obj;
} else {
  tmp3 = module_4661;
}
module_4661 = tmp3;
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
  date.setUTCFullYear(module_4661.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;