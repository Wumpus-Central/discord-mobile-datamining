// === Module 4611: ? ===

// Module 4611
import module_4600_mod from "module_4600" /* 4600 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4600 = module_4600_mod;
if (!module_4600) {
  const obj = { default: module_4600 };
  let tmp3 = obj;
} else {
  tmp3 = module_4600;
}
module_4600 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4600.default(Date.now(), arg0);
};
export default exports.default;