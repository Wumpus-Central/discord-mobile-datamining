// === Module 4295: ? ===

// Module 4295
import module_4296_mod from "module_4296" /* 4296 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_4296 = module_4296_mod;
if (!module_4296) {
  const obj = { default: module_4296 };
  let tmp3 = obj;
} else {
  tmp3 = module_4296;
}
module_4296 = tmp3;
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
  return module_4296.default(arg0, arg1, { weekStartsOn: 1 });
};
export default exports.default;