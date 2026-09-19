// === Module 4192: ? ===

// Module 4192
import module_4193_mod from "module_4193" /* 4193 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4193 = module_4193_mod;
if (!module_4193) {
  const obj = { default: module_4193 };
  let tmp3 = obj;
} else {
  tmp3 = module_4193;
}
module_4193 = tmp3;
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
  return module_4193.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;