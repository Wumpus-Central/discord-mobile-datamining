// === Module 4665: subBusinessDays ===

// Module 4665 (subBusinessDays)
import module_4381_mod from "module_4381" /* 4381 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;
import module_4235_mod from "module_4235" /* 4235 */;

let module_4381 = module_4381_mod;
if (!module_4381) {
  const obj = { default: module_4381 };
  let tmp3 = obj;
} else {
  tmp3 = module_4381;
}
module_4381 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj3 = { default: module_4235 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4235;
}
module_4235 = tmp7;

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4381.default(arg0, -module_4235.default(arg1));
};
export default exports.default;