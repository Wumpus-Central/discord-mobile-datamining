// === Module 4596: ? ===

// Module 4596
import module_4412_mod from "module_4412" /* 4412 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4412 = module_4412_mod;
if (!module_4412) {
  const obj = { default: module_4412 };
  let tmp3 = obj;
} else {
  tmp3 = module_4412;
}
module_4412 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4412.default(arg0, Date.now());
};
export default exports.default;