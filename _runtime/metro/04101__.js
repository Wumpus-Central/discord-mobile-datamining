// === Module 4101: ? ===

// Module 4101
import module_3951_mod from "module_3951" /* 3951 */;
import module_4102_mod from "module_4102" /* 4102 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_3951 = module_3951_mod;
if (!module_3951) {
  const obj = { default: module_3951 };
  let tmp3 = obj;
} else {
  tmp3 = module_3951;
}
module_3951 = tmp3;
let module_4102 = module_4102_mod;
if (!module_4102) {
  const obj2 = { default: module_4102 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4102;
}
module_4102 = tmp5;
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
  return module_4102.default(interval, module_3951.default(arg1) * c3);
};
export default exports.default;