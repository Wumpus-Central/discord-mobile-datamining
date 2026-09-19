// === Module 4204: ? ===

// Module 4204
import module_4196_mod from "module_4196" /* 4196 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_4196 = module_4196_mod;
if (!module_4196) {
  const obj = { default: module_4196 };
  let tmp3 = obj;
} else {
  tmp3 = module_4196;
}
module_4196 = tmp3;
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
  return module_4196.default(Date.now(), arg0);
};
export default exports.default;