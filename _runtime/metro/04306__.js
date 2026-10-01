// === Module 4306: ? ===

// Module 4306
import module_4298_mod from "module_4298" /* 4298 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4298.default(Date.now(), arg0);
};
export default exports.default;