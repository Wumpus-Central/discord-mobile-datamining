// === Module 4593: ? ===

// Module 4593
import module_4579_mod from "module_4579" /* 4579 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4579 = module_4579_mod;
if (!module_4579) {
  const obj = { default: module_4579 };
  let tmp3 = obj;
} else {
  tmp3 = module_4579;
}
module_4579 = tmp3;
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
  return module_4579.default(arg0, Date.now(), arg1);
};
export default exports.default;