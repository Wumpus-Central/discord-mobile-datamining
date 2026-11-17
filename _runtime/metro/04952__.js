// === Module 4952: ? ===

// Module 4952
import module_4944_mod from "module_4944" /* 4944 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4944 = module_4944_mod;
if (!module_4944) {
  const obj = { default: module_4944 };
  let tmp3 = obj;
} else {
  tmp3 = module_4944;
}
module_4944 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4944.default(arg0, Date.now());
};
export default exports.default;