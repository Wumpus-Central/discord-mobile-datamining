// === Module 4745: ? ===

// Module 4745
import module_4593_mod from "module_4593" /* 4593 */;
import module_4746_mod from "module_4746" /* 4746 */;
import module_4749_mod from "module_4749" /* 4749 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj = { default: module_4593 };
  let tmp3 = obj;
} else {
  tmp3 = module_4593;
}
module_4593 = tmp3;
let module_4746 = module_4746_mod;
if (!module_4746) {
  const obj2 = { default: module_4746 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4746;
}
module_4746 = tmp5;
let module_4749 = module_4749_mod;
if (!module_4749) {
  const obj3 = { default: module_4749 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4749;
}
module_4749 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4749.default(arg0, module_4746.default(arg0) + module_4593.default(arg1));
};
export default exports.default;