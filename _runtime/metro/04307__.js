// === Module 4307: ? ===

// Module 4307
import module_4299_mod from "module_4299" /* 4299 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let module_4299 = module_4299_mod;
if (!module_4299) {
  const obj = { default: module_4299 };
  let tmp3 = obj;
} else {
  tmp3 = module_4299;
}
module_4299 = tmp3;
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
  return module_4299.default(Date.now(), arg0);
};
export default exports.default;