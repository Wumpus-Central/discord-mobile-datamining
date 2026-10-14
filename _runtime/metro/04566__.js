// === Module 4566: ? ===

// Module 4566
import module_4382_mod from "module_4382" /* 4382 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let module_4382 = module_4382_mod;
if (!module_4382) {
  const obj = { default: module_4382 };
  let tmp3 = obj;
} else {
  tmp3 = module_4382;
}
module_4382 = tmp3;
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
  return module_4382.default(arg0, Date.now());
};
export default exports.default;