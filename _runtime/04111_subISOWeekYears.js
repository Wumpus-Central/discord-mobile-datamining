// === Module 4111: subISOWeekYears ===

// Module 4111 (subISOWeekYears)
import module_4071_mod from "module_4071" /* 4071 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;
import module_3919_mod from "module_3919" /* 3919 */;

let module_4071 = module_4071_mod;
if (!module_4071) {
  const obj = { default: module_4071 };
  let tmp3 = obj;
} else {
  tmp3 = module_4071;
}
module_4071 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj3 = { default: module_3919 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3919;
}
module_3919 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4071.default(arg0, -module_3919.default(arg1));
};
export default exports.default;