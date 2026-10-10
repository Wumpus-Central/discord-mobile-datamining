// === Module 4368: ? ===

// Module 4368
import module_4203_mod from "module_4203" /* 4203 */;
import module_4348_mod from "module_4348" /* 4348 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4348 = module_4348_mod;
if (!module_4348) {
  const obj2 = { default: module_4348 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4348;
}
module_4348 = tmp5;
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
  return module_4348.default(interval, 12 * module_4203.default(arg1));
};
export default exports.default;