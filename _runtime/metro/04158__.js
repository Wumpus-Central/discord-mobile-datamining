// === Module 4158: ? ===

// Module 4158
import module_4159_mod from "module_4159" /* 4159 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_4159 = module_4159_mod;
if (!module_4159) {
  const obj = { default: module_4159 };
  let tmp3 = obj;
} else {
  tmp3 = module_4159;
}
module_4159 = tmp3;
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
  return module_4159.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;