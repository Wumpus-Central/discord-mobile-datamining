// === Module 4273: ? ===

// Module 4273
import module_4259_mod from "module_4259" /* 4259 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj = { default: module_4259 };
  let tmp3 = obj;
} else {
  tmp3 = module_4259;
}
module_4259 = tmp3;
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
  return module_4259.default(arg0, Date.now(), arg1);
};
export default exports.default;