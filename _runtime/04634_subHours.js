// === Module 4634: subHours ===

// Module 4634 (subHours)
import module_4353_mod from "module_4353" /* 4353 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;
import module_4203_mod from "module_4203" /* 4203 */;

let module_4353 = module_4353_mod;
if (!module_4353) {
  const obj = { default: module_4353 };
  let tmp3 = obj;
} else {
  tmp3 = module_4353;
}
module_4353 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj3 = { default: module_4203 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4203;
}
module_4203 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4353.default(arg0, -module_4203.default(arg1));
};
export default exports.default;