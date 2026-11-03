// === Module 4783: ? ===

// Module 4783
import module_4769_mod from "module_4769" /* 4769 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4769 = module_4769_mod;
if (!module_4769) {
  const obj = { default: module_4769 };
  let tmp3 = obj;
} else {
  tmp3 = module_4769;
}
module_4769 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4769.default(arg0, Date.now(), arg1);
};
export default exports.default;