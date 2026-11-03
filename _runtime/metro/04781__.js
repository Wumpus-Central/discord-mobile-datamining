// === Module 4781: ? ===

// Module 4781
import module_4773_mod from "module_4773" /* 4773 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let module_4773 = module_4773_mod;
if (!module_4773) {
  const obj = { default: module_4773 };
  let tmp3 = obj;
} else {
  tmp3 = module_4773;
}
module_4773 = tmp3;
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
  return module_4773.default(Date.now(), arg0);
};
export default exports.default;