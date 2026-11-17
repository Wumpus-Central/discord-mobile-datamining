// === Module 4758: ? ===

// Module 4758
import module_4593_mod from "module_4593" /* 4593 */;
import module_4738_mod from "module_4738" /* 4738 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4593 = module_4593_mod;
if (!module_4593) {
  const obj = { default: module_4593 };
  let tmp3 = obj;
} else {
  tmp3 = module_4593;
}
module_4593 = tmp3;
let module_4738 = module_4738_mod;
if (!module_4738) {
  const obj2 = { default: module_4738 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4738;
}
module_4738 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4738.default(interval, 12 * module_4593.default(arg1));
};
export default exports.default;