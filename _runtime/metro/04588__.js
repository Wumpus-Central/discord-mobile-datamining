// === Module 4588: ? ===

// Module 4588
import module_4425_mod from "module_4425" /* 4425 */;
import module_4576_mod from "module_4576" /* 4576 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4425 = module_4425_mod;
if (!module_4425) {
  const obj = { default: module_4425 };
  let tmp3 = obj;
} else {
  tmp3 = module_4425;
}
module_4425 = tmp3;
let module_4576 = module_4576_mod;
if (!module_4576) {
  const obj2 = { default: module_4576 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4576;
}
module_4576 = tmp5;
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
  return module_4576.default(interval, 1000 * module_4425.default(arg1));
};
export default exports.default;