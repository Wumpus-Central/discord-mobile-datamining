// === Module 4454: subISOWeekYears ===

// Module 4454 (subISOWeekYears)
import module_4414_mod from "module_4414" /* 4414 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;
import module_4262_mod from "module_4262" /* 4262 */;

let module_4414 = module_4414_mod;
if (!module_4414) {
  const obj = { default: module_4414 };
  let tmp3 = obj;
} else {
  tmp3 = module_4414;
}
module_4414 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj3 = { default: module_4262 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4262;
}
module_4262 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4414.default(arg0, -module_4262.default(arg1));
};
export default exports.default;