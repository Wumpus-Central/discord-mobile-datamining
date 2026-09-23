// === Module 4272: ? ===

// Module 4272
import module_4264_mod from "module_4264" /* 4264 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4264 = module_4264_mod;
if (!module_4264) {
  const obj = { default: module_4264 };
  let tmp3 = obj;
} else {
  tmp3 = module_4264;
}
module_4264 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4264.default(Date.now(), arg0);
};
export default exports.default;