// === Module 4503: ? ===

// Module 4503
import module_4504_mod from "module_4504" /* 4504 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4504 = module_4504_mod;
if (!module_4504) {
  const obj = { default: module_4504 };
  let tmp3 = obj;
} else {
  tmp3 = module_4504;
}
module_4504 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4504.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;