// === Module 4655: ? ===

// Module 4655
import module_4437_mod from "module_4437" /* 4437 */;
import module_4470_mod from "module_4470" /* 4470 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4437 = module_4437_mod;
if (!module_4437) {
  const obj = { default: module_4437 };
  let tmp3 = obj;
} else {
  tmp3 = module_4437;
}
module_4437 = tmp3;
let module_4470 = module_4470_mod;
if (!module_4470) {
  const obj2 = { default: module_4470 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4470;
}
module_4470 = tmp5;
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
  return module_4470.default(arg0, module_4437.default(Date.now(), 1));
};
export default exports.default;