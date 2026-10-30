// === Module 4651: ? ===

// Module 4651
import module_4637_mod from "module_4637" /* 4637 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4637 = module_4637_mod;
if (!module_4637) {
  const obj = { default: module_4637 };
  let tmp3 = obj;
} else {
  tmp3 = module_4637;
}
module_4637 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4637.default(arg0, Date.now(), arg1);
};
export default exports.default;