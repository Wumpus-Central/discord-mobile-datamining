// === Module 4323: ? ===

// Module 4323
import module_4139_mod from "module_4139" /* 4139 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_4139 = module_4139_mod;
if (!module_4139) {
  const obj = { default: module_4139 };
  let tmp3 = obj;
} else {
  tmp3 = module_4139;
}
module_4139 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4139.default(arg0, Date.now());
};
export default exports.default;