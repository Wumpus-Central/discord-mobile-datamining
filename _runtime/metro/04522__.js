// === Module 4522: ? ===

// Module 4522
import module_4304_mod from "module_4304" /* 4304 */;
import module_4337_mod from "module_4337" /* 4337 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4304 = module_4304_mod;
if (!module_4304) {
  const obj = { default: module_4304 };
  let tmp3 = obj;
} else {
  tmp3 = module_4304;
}
module_4304 = tmp3;
let module_4337 = module_4337_mod;
if (!module_4337) {
  const obj2 = { default: module_4337 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4337;
}
module_4337 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4337.default(arg0, module_4304.default(Date.now(), 1));
};
export default exports.default;