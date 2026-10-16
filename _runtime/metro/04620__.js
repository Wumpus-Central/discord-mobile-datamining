// === Module 4620: ? ===

// Module 4620
import module_4606_mod from "module_4606" /* 4606 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4606 = module_4606_mod;
if (!module_4606) {
  const obj = { default: module_4606 };
  let tmp3 = obj;
} else {
  tmp3 = module_4606;
}
module_4606 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4606.default(arg0, Date.now(), arg1);
};
export default exports.default;