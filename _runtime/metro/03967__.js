// === Module 3967: ? ===

// Module 3967
import module_3815_mod from "module_3815" /* 3815 */;
import module_3968_mod from "module_3968" /* 3968 */;
import module_3971_mod from "module_3971" /* 3971 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj = { default: module_3815 };
  let tmp3 = obj;
} else {
  tmp3 = module_3815;
}
module_3815 = tmp3;
let module_3968 = module_3968_mod;
if (!module_3968) {
  const obj2 = { default: module_3968 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3968;
}
module_3968 = tmp5;
let module_3971 = module_3971_mod;
if (!module_3971) {
  const obj3 = { default: module_3971 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3971;
}
module_3971 = tmp7;
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
  return module_3971.default(arg0, module_3968.default(arg0) + module_3815.default(arg1));
};
export default exports.default;