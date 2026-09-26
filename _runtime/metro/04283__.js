// === Module 4283: ? ===

// Module 4283
import module_4099_mod from "module_4099" /* 4099 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let module_4099 = module_4099_mod;
if (!module_4099) {
  const obj = { default: module_4099 };
  let tmp3 = obj;
} else {
  tmp3 = module_4099;
}
module_4099 = tmp3;
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
  return module_4099.default(arg0, Date.now());
};
export default exports.default;