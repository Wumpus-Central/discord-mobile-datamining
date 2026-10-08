// === Module 4590: subBusinessDays ===

// Module 4590 (subBusinessDays)
import module_4306_mod from "module_4306" /* 4306 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;
import module_4160_mod from "module_4160" /* 4160 */;

let module_4306 = module_4306_mod;
if (!module_4306) {
  const obj = { default: module_4306 };
  let tmp3 = obj;
} else {
  tmp3 = module_4306;
}
module_4306 = tmp3;
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

export default function subBusinessDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4306.default(arg0, -module_4160.default(arg1));
};
export default exports.default;