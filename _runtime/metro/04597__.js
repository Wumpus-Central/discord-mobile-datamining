// === Module 4597: ? ===

// Module 4597
import module_4379_mod from "module_4379" /* 4379 */;
import module_4412_mod from "module_4412" /* 4412 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4379 = module_4379_mod;
if (!module_4379) {
  const obj = { default: module_4379 };
  let tmp3 = obj;
} else {
  tmp3 = module_4379;
}
module_4379 = tmp3;
let module_4412 = module_4412_mod;
if (!module_4412) {
  const obj2 = { default: module_4412 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4412;
}
module_4412 = tmp5;
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
  return module_4412.default(arg0, module_4379.default(Date.now(), 1));
};
export default exports.default;