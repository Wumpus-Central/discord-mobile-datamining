// === Module 4660: ? ===

// Module 4660
import module_4442_mod from "module_4442" /* 4442 */;
import module_4475_mod from "module_4475" /* 4475 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4442 = module_4442_mod;
if (!module_4442) {
  const obj = { default: module_4442 };
  let tmp3 = obj;
} else {
  tmp3 = module_4442;
}
module_4442 = tmp3;
let module_4475 = module_4475_mod;
if (!module_4475) {
  const obj2 = { default: module_4475 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4475;
}
module_4475 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4475.default(arg0, module_4442.default(Date.now(), 1));
};
export default exports.default;