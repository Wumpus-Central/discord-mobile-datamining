// === Module 4126: ? ===

// Module 4126
import module_3962_mod from "module_3962" /* 3962 */;
import module_4106_mod from "module_4106" /* 4106 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let module_4106 = module_4106_mod;
if (!module_4106) {
  const obj2 = { default: module_4106 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4106;
}
module_4106 = tmp5;
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
  return module_4106.default(arg0, 7 * module_3962.default(arg1));
};
export default exports.default;