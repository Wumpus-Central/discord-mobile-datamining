// === Module 4450: subISOWeekYears ===

// Module 4450 (subISOWeekYears)
import module_4410_mod from "module_4410" /* 4410 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;
import module_4258_mod from "module_4258" /* 4258 */;

let module_4410 = module_4410_mod;
if (!module_4410) {
  const obj = { default: module_4410 };
  let tmp3 = obj;
} else {
  tmp3 = module_4410;
}
module_4410 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4258 = module_4258_mod;
if (!module_4258) {
  const obj3 = { default: module_4258 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4258;
}
module_4258 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4410.default(arg0, -module_4258.default(arg1));
};
export default exports.default;