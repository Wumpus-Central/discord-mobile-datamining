// === Module 4637: subSeconds ===

// Module 4637 (subSeconds)
import module_4203_mod from "module_4203" /* 4203 */;
import module_4366_mod from "module_4366" /* 4366 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let module_4203 = module_4203_mod;
if (!module_4203) {
  const obj = { default: module_4203 };
  let tmp3 = obj;
} else {
  tmp3 = module_4203;
}
module_4203 = tmp3;
let module_4366 = module_4366_mod;
if (!module_4366) {
  const obj2 = { default: module_4366 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4366;
}
module_4366 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4366.default(arg0, -module_4203.default(arg1));
};
export default exports.default;