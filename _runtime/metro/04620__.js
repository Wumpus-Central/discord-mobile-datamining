// === Module 4620: ? ===

// Module 4620
import module_4436_mod from "module_4436" /* 4436 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj = { default: module_4436 };
  let tmp3 = obj;
} else {
  tmp3 = module_4436;
}
module_4436 = tmp3;
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
  return module_4436.default(arg0, Date.now());
};
export default exports.default;