// === Module 4276: ? ===

// Module 4276
import module_4092_mod from "module_4092" /* 4092 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4092 = module_4092_mod;
if (!module_4092) {
  const obj = { default: module_4092 };
  let tmp3 = obj;
} else {
  tmp3 = module_4092;
}
module_4092 = tmp3;
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
  return module_4092.default(arg0, Date.now());
};
export default exports.default;