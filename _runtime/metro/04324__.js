// === Module 4324: ? ===

// Module 4324
import module_4106_mod from "module_4106" /* 4106 */;
import module_4139_mod from "module_4139" /* 4139 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_4106 = module_4106_mod;
if (!module_4106) {
  const obj = { default: module_4106 };
  let tmp3 = obj;
} else {
  tmp3 = module_4106;
}
module_4106 = tmp3;
let module_4139 = module_4139_mod;
if (!module_4139) {
  const obj2 = { default: module_4139 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4139;
}
module_4139 = tmp5;
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
  return module_4139.default(arg0, module_4106.default(Date.now(), 1));
};
export default exports.default;