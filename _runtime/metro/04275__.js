// === Module 4275: ? ===

// Module 4275
import module_4261_mod from "module_4261" /* 4261 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_4261 = module_4261_mod;
if (!module_4261) {
  const obj = { default: module_4261 };
  let tmp3 = obj;
} else {
  tmp3 = module_4261;
}
module_4261 = tmp3;
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
  return module_4261.default(arg0, Date.now(), arg1);
};
export default exports.default;