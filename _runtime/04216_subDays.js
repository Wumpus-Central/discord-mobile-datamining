// === Module 4216: subDays ===

// Module 4216 (subDays)
import module_3993_mod from "module_3993" /* 3993 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;
import module_3849_mod from "module_3849" /* 3849 */;

let module_3993 = module_3993_mod;
if (!module_3993) {
  const obj = { default: module_3993 };
  let tmp3 = obj;
} else {
  tmp3 = module_3993;
}
module_3993 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj3 = { default: module_3849 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3849;
}
module_3849 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3993.default(arg0, -module_3849.default(arg1));
};
export default exports.default;