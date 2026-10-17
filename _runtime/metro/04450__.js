// === Module 4450: ? ===

// Module 4450
import module_4298_mod from "module_4298" /* 4298 */;
import module_4451_mod from "module_4451" /* 4451 */;
import module_4454_mod from "module_4454" /* 4454 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let module_4451 = module_4451_mod;
if (!module_4451) {
  const obj2 = { default: module_4451 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4451;
}
module_4451 = tmp5;
let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj3 = { default: module_4454 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4454;
}
module_4454 = tmp7;
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
  return module_4454.default(arg0, module_4451.default(arg0) + module_4298.default(arg1));
};
export default exports.default;