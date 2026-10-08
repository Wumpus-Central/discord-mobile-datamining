// === Module 4516: ? ===

// Module 4516
import module_4508_mod from "module_4508" /* 4508 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let module_4508 = module_4508_mod;
if (!module_4508) {
  const obj = { default: module_4508 };
  let tmp3 = obj;
} else {
  tmp3 = module_4508;
}
module_4508 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return module_4508.default(Date.now(), arg0);
};
export default exports.default;