// === Module 4815: ? ===

// Module 4815
import module_4631_mod from "module_4631" /* 4631 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4631 = module_4631_mod;
if (!module_4631) {
  const obj = { default: module_4631 };
  let tmp3 = obj;
} else {
  tmp3 = module_4631;
}
module_4631 = tmp3;
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
  return module_4631.default(arg0, Date.now());
};
export default exports.default;