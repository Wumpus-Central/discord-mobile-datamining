// === Module 4621: ? ===

// Module 4621
import module_4613_mod from "module_4613" /* 4613 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4613 = module_4613_mod;
if (!module_4613) {
  const obj = { default: module_4613 };
  let tmp3 = obj;
} else {
  tmp3 = module_4613;
}
module_4613 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisYear(arg0) {
  requiredArgs.default(1, arguments);
  return module_4613.default(arg0, Date.now());
};
export default exports.default;