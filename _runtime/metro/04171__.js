// === Module 4171: ? ===

// Module 4171
import module_4163_mod from "module_4163" /* 4163 */;
import requiredArgs_mod from "requiredArgs" /* 3812 */;

let module_4163 = module_4163_mod;
if (!module_4163) {
  const obj = { default: module_4163 };
  let tmp3 = obj;
} else {
  tmp3 = module_4163;
}
module_4163 = tmp3;
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
  return module_4163.default(Date.now(), arg0);
};
export default exports.default;