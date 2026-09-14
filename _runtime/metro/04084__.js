// === Module 4084: ? ===

// Module 4084
import module_4076_mod from "module_4076" /* 4076 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_4076 = module_4076_mod;
if (!module_4076) {
  const obj = { default: module_4076 };
  let tmp3 = obj;
} else {
  tmp3 = module_4076;
}
module_4076 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMonth(arg0) {
  requiredArgs.default(1, arguments);
  return module_4076.default(Date.now(), arg0);
};
export default exports.default;