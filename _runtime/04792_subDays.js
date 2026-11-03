// === Module 4792: subDays ===

// Module 4792 (subDays)
import module_4569_mod from "module_4569" /* 4569 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;
import module_4425_mod from "module_4425" /* 4425 */;

let module_4569 = module_4569_mod;
if (!module_4569) {
  const obj = { default: module_4569 };
  let tmp3 = obj;
} else {
  tmp3 = module_4569;
}
module_4569 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj3 = { default: module_4425 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4425;
}
module_4425 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4569.default(arg0, -module_4425.default(arg1));
};
export default exports.default;