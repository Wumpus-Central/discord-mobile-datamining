// === Module 4208: ? ===

// Module 4208
import module_4200_mod from "module_4200" /* 4200 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4200 = module_4200_mod;
if (!module_4200) {
  const obj = { default: module_4200 };
  let tmp3 = obj;
} else {
  tmp3 = module_4200;
}
module_4200 = tmp3;
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
  return module_4200.default(arg0, Date.now());
};
export default exports.default;