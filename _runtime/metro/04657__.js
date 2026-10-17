// === Module 4657: ? ===

// Module 4657
import module_4649_mod from "module_4649" /* 4649 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4649 = module_4649_mod;
if (!module_4649) {
  const obj = { default: module_4649 };
  let tmp3 = obj;
} else {
  tmp3 = module_4649;
}
module_4649 = tmp3;
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
  return module_4649.default(arg0, Date.now());
};
export default exports.default;