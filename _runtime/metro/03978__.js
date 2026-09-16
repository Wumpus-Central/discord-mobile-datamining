// === Module 3978: ? ===

// Module 3978
import module_3974_mod from "module_3974" /* 3974 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3974 = module_3974_mod;
if (!module_3974) {
  const obj = { default: module_3974 };
  let tmp3 = obj;
} else {
  tmp3 = module_3974;
}
module_3974 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_3974.default(arg0, Date.now(), arg1);
};
export default exports.default;