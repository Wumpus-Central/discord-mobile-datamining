// === Module 3849: ? ===

// Module 3849
import module_3697 from "module_3697" /* 3697 */;
import module_3850 from "module_3850" /* 3850 */;
import module_3853 from "module_3853" /* 3853 */;
import requiredArgs from "requiredArgs" /* 3694 */;

if (!module_3697) {
  let obj = { default: module_3697 };
  let tmp3 = obj;
} else {
  tmp3 = module_3697;
}
module_3697 = tmp3;
if (!module_3850) {
  obj = { default: module_3850 };
  let tmp5 = obj;
} else {
  tmp5 = module_3850;
}
module_3850 = tmp5;
if (!module_3853) {
  obj = { default: module_3853 };
  let tmp7 = obj;
} else {
  tmp7 = module_3853;
}
module_3853 = tmp7;
if (!requiredArgs) {
  const obj1 = { default: requiredArgs };
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3853.default(arg0, module_3850.default(arg0) + module_3697.default(arg1));
};
export default exports.default;