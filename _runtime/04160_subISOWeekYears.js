// === Module 4160: subISOWeekYears ===

// Module 4160 (subISOWeekYears)
import module_4120_mod from "module_4120" /* 4120 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import module_3968_mod from "module_3968" /* 3968 */;

let module_4120 = module_4120_mod;
if (!module_4120) {
  const obj = { default: module_4120 };
  let tmp3 = obj;
} else {
  tmp3 = module_4120;
}
module_4120 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj3 = { default: module_3968 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3968;
}
module_3968 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4120.default(arg0, -module_3968.default(arg1));
};
export default exports.default;