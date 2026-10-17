// === Module 4656: ? ===

// Module 4656
import module_4642_mod from "module_4642" /* 4642 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4642 = module_4642_mod;
if (!module_4642) {
  const obj = { default: module_4642 };
  let tmp3 = obj;
} else {
  tmp3 = module_4642;
}
module_4642 = tmp3;
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
  return module_4642.default(arg0, Date.now(), arg1);
};
export default exports.default;