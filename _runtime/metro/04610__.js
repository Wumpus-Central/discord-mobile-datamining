// === Module 4610: ? ===

// Module 4610
import module_4602_mod from "module_4602" /* 4602 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let module_4602 = module_4602_mod;
if (!module_4602) {
  const obj = { default: module_4602 };
  let tmp3 = obj;
} else {
  tmp3 = module_4602;
}
module_4602 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4602.default(Date.now(), arg0);
};
export default exports.default;