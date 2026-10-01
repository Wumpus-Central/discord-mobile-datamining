// === Module 4108: startOfISOWeekYear ===

// Module 4108 (startOfISOWeekYear)
import module_4104_mod from "module_4104" /* 4104 */;
import startOfISOWeek_mod from "startOfISOWeek" /* 4105 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4104 = module_4104_mod;
if (!module_4104) {
  const obj = { default: module_4104 };
  let tmp3 = obj;
} else {
  tmp3 = module_4104;
}
module_4104 = tmp3;
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
  date.setFullYear(module_4104.default(arg0), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;