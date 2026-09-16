// === Module 3880: ? ===

// Module 3880
import module_3730_mod from "module_3730" /* 3730 */;
import module_3881_mod from "module_3881" /* 3881 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let module_3881 = module_3881_mod;
if (!module_3881) {
  const obj2 = { default: module_3881 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3881;
}
module_3881 = tmp5;
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
  return module_3881.default(interval, module_3730.default(arg1) * c3);
};
export default exports.default;