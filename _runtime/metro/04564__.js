// === Module 4564: ? ===

// Module 4564
import module_4556_mod from "module_4556" /* 4556 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4556 = module_4556_mod;
if (!module_4556) {
  const obj = { default: module_4556 };
  let tmp3 = obj;
} else {
  tmp3 = module_4556;
}
module_4556 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4556.default(arg0, Date.now());
};
export default exports.default;