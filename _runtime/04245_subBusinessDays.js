// === Module 4245: subBusinessDays ===

// Module 4245 (subBusinessDays)
import module_3961_mod from "module_3961" /* 3961 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;
import module_3815_mod from "module_3815" /* 3815 */;

let module_3961 = module_3961_mod;
if (!module_3961) {
  const obj = { default: module_3961 };
  let tmp3 = obj;
} else {
  tmp3 = module_3961;
}
module_3961 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3815 = module_3815_mod;
if (!module_3815) {
  const obj3 = { default: module_3815 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3815;
}
module_3815 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3961.default(arg0, -module_3815.default(arg1));
};
export default exports.default;