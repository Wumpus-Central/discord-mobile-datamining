// === Module 4786: ? ===

// Module 4786
import module_4602_mod from "module_4602" /* 4602 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

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

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4602.default(arg0, Date.now());
};
export default exports.default;