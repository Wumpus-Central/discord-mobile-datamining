// === Module 4664: subMonths ===

// Module 4664 (subMonths)
import module_4235_mod from "module_4235" /* 4235 */;
import module_4380_mod from "module_4380" /* 4380 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj = { default: module_4235 };
  let tmp3 = obj;
} else {
  tmp3 = module_4235;
}
module_4235 = tmp3;
let module_4380 = module_4380_mod;
if (!module_4380) {
  const obj2 = { default: module_4380 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4380;
}
module_4380 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4380.default(arg0, -module_4235.default(arg1));
};
export default exports.default;