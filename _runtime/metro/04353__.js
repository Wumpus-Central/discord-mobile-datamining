// === Module 4353: ? ===

// Module 4353
import module_4203_mod from "module_4203" /* 4203 */;
import module_4354_mod from "module_4354" /* 4354 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4354 = module_4354_mod;
if (!module_4354) {
  const obj2 = { default: module_4354 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4354;
}
module_4354 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4354.default(interval, module_4203.default(arg1) * c3);
};
export default exports.default;