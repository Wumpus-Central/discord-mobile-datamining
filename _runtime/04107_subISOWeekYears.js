// === Module 4107: subISOWeekYears ===

// Module 4107 (subISOWeekYears)
import module_4067_mod from "module_4067" /* 4067 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;
import module_3915_mod from "module_3915" /* 3915 */;

let module_4067 = module_4067_mod;
if (!module_4067) {
  const obj = { default: module_4067 };
  let tmp3 = obj;
} else {
  tmp3 = module_4067;
}
module_4067 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3915 = module_3915_mod;
if (!module_3915) {
  const obj3 = { default: module_3915 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3915;
}
module_3915 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4067.default(arg0, -module_3915.default(arg1));
};
export default exports.default;