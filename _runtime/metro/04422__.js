// === Module 4422: ? ===

// Module 4422
import module_4259_mod from "module_4259" /* 4259 */;
import module_4410_mod from "module_4410" /* 4410 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj = { default: module_4259 };
  let tmp3 = obj;
} else {
  tmp3 = module_4259;
}
module_4259 = tmp3;
let module_4410 = module_4410_mod;
if (!module_4410) {
  const obj2 = { default: module_4410 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4410;
}
module_4410 = tmp5;
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
  return module_4410.default(interval, 1000 * module_4259.default(arg1));
};
export default exports.default;