// === Module 4606: ? ===

// Module 4606
import module_4454_mod from "module_4454" /* 4454 */;
import module_4607_mod from "module_4607" /* 4607 */;
import module_4610_mod from "module_4610" /* 4610 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj = { default: module_4454 };
  let tmp3 = obj;
} else {
  tmp3 = module_4454;
}
module_4454 = tmp3;
let module_4607 = module_4607_mod;
if (!module_4607) {
  const obj2 = { default: module_4607 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4607;
}
module_4607 = tmp5;
let module_4610 = module_4610_mod;
if (!module_4610) {
  const obj3 = { default: module_4610 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4610;
}
module_4610 = tmp7;
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
  return module_4610.default(arg0, module_4607.default(arg0) + module_4454.default(arg1));
};
export default exports.default;