// === Module 4274: ? ===

// Module 4274
import module_4266_mod from "module_4266" /* 4266 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4266 = module_4266_mod;
if (!module_4266) {
  const obj = { default: module_4266 };
  let tmp3 = obj;
} else {
  tmp3 = module_4266;
}
module_4266 = tmp3;
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
  return module_4266.default(Date.now(), arg0);
};
export default exports.default;