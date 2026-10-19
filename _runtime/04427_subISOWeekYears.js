// === Module 4427: subISOWeekYears ===

// Module 4427 (subISOWeekYears)
import module_4387_mod from "module_4387" /* 4387 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;
import module_4235_mod from "module_4235" /* 4235 */;

let module_4387 = module_4387_mod;
if (!module_4387) {
  const obj = { default: module_4387 };
  let tmp3 = obj;
} else {
  tmp3 = module_4387;
}
module_4387 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj3 = { default: module_4235 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4235;
}
module_4235 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4387.default(arg0, -module_4235.default(arg1));
};
export default exports.default;