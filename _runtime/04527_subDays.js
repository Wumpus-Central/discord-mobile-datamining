// === Module 4527: subDays ===

// Module 4527 (subDays)
import module_4304_mod from "module_4304" /* 4304 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;
import module_4160_mod from "module_4160" /* 4160 */;

let module_4304 = module_4304_mod;
if (!module_4304) {
  const obj = { default: module_4304 };
  let tmp3 = obj;
} else {
  tmp3 = module_4304;
}
module_4304 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4160 = module_4160_mod;
if (!module_4160) {
  const obj3 = { default: module_4160 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4160;
}
module_4160 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4304.default(arg0, -module_4160.default(arg1));
};
export default exports.default;