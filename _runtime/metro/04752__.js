// === Module 4752: ? ===

// Module 4752
import module_4589_mod from "module_4589" /* 4589 */;
import module_4740_mod from "module_4740" /* 4740 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

let module_4589 = module_4589_mod;
if (!module_4589) {
  const obj = { default: module_4589 };
  let tmp3 = obj;
} else {
  tmp3 = module_4589;
}
module_4589 = tmp3;
let module_4740 = module_4740_mod;
if (!module_4740) {
  const obj2 = { default: module_4740 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4740;
}
module_4740 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addSeconds(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4740.default(interval, 1000 * module_4589.default(arg1));
};
export default exports.default;