// === Module 4459: ? ===

// Module 4459
import module_4298_mod from "module_4298" /* 4298 */;
import module_4449_mod from "module_4449" /* 4449 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let module_4449 = module_4449_mod;
if (!module_4449) {
  const obj2 = { default: module_4449 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4449;
}
module_4449 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4449.default(interval, module_4298.default(arg1) * c3);
};
export default exports.default;