// === Module 4367: ? ===

// Module 4367
import module_4203_mod from "module_4203" /* 4203 */;
import module_4347_mod from "module_4347" /* 4347 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4347 = module_4347_mod;
if (!module_4347) {
  const obj2 = { default: module_4347 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4347;
}
module_4347 = tmp5;
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
  return module_4347.default(arg0, 7 * module_4203.default(arg1));
};
export default exports.default;