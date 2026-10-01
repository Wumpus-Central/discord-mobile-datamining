// === Module 4303: ? ===

// Module 4303
import module_4292_mod from "module_4292" /* 4292 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
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
  return module_4292.default(Date.now(), arg0);
};
export default exports.default;