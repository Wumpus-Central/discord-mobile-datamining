// === Module 4951: ? ===

// Module 4951
import module_4937_mod from "module_4937" /* 4937 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4937 = module_4937_mod;
if (!module_4937) {
  const obj = { default: module_4937 };
  let tmp3 = obj;
} else {
  tmp3 = module_4937;
}
module_4937 = tmp3;
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
  return module_4937.default(arg0, Date.now(), arg1);
};
export default exports.default;