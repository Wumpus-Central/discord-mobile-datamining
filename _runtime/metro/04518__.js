// === Module 4518: ? ===

// Module 4518
import module_4510_mod from "module_4510" /* 4510 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let module_4510 = module_4510_mod;
if (!module_4510) {
  const obj = { default: module_4510 };
  let tmp3 = obj;
} else {
  tmp3 = module_4510;
}
module_4510 = tmp3;
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
  return module_4510.default(Date.now(), arg0);
};
export default exports.default;