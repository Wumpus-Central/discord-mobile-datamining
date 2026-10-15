// === Module 4423: ? ===

// Module 4423
import module_4259_mod from "module_4259" /* 4259 */;
import module_4403_mod from "module_4403" /* 4403 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj = { default: module_4259 };
  let tmp3 = obj;
} else {
  tmp3 = module_4259;
}
module_4259 = tmp3;
let module_4403 = module_4403_mod;
if (!module_4403) {
  const obj2 = { default: module_4403 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4403;
}
module_4403 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4403.default(arg0, 7 * module_4259.default(arg1));
};
export default exports.default;