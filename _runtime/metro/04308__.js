// === Module 4308: ? ===

// Module 4308
import module_4300_mod from "module_4300" /* 4300 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let module_4300 = module_4300_mod;
if (!module_4300) {
  const obj = { default: module_4300 };
  let tmp3 = obj;
} else {
  tmp3 = module_4300;
}
module_4300 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return module_4300.default(Date.now(), arg0);
};
export default exports.default;