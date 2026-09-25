// === Module 4271: ? ===

// Module 4271
import module_4260_mod from "module_4260" /* 4260 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4260 = module_4260_mod;
if (!module_4260) {
  const obj = { default: module_4260 };
  let tmp3 = obj;
} else {
  tmp3 = module_4260;
}
module_4260 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4260.default(Date.now(), arg0);
};
export default exports.default;