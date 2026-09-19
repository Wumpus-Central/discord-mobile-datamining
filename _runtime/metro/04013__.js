// === Module 4013: ? ===

// Module 4013
import module_3849_mod from "module_3849" /* 3849 */;
import module_3993_mod from "module_3993" /* 3993 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let module_3993 = module_3993_mod;
if (!module_3993) {
  const obj2 = { default: module_3993 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3993;
}
module_3993 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3993.default(arg0, 7 * module_3849.default(arg1));
};
export default exports.default;