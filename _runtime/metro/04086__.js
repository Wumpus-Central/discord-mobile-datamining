// === Module 4086: ? ===

// Module 4086
import module_4078_mod from "module_4078" /* 4078 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_4078 = module_4078_mod;
if (!module_4078) {
  const obj = { default: module_4078 };
  let tmp3 = obj;
} else {
  tmp3 = module_4078;
}
module_4078 = tmp3;
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
  return module_4078.default(Date.now(), arg0);
};
export default exports.default;