// === Module 4196: startOfUTCISOWeekYear ===

// Module 4196 (startOfUTCISOWeekYear)
import module_4197_mod from "module_4197" /* 4197 */;
import startOfUTCISOWeek_mod from "startOfUTCISOWeek" /* 4195 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_4197 = module_4197_mod;
if (!module_4197) {
  const obj = { default: module_4197 };
  let tmp3 = obj;
} else {
  tmp3 = module_4197;
}
module_4197 = tmp3;
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
  date.setUTCFullYear(module_4197.default(arg0), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;