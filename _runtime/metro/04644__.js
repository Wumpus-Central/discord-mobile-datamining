// === Module 4644: ? ===

// Module 4644
import module_4633_mod from "module_4633" /* 4633 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4633 = module_4633_mod;
if (!module_4633) {
  const obj = { default: module_4633 };
  let tmp3 = obj;
} else {
  tmp3 = module_4633;
}
module_4633 = tmp3;
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
  return module_4633.default(Date.now(), arg0);
};
export default exports.default;