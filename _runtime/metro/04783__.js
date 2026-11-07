// === Module 4783: ? ===

// Module 4783
import module_4775_mod from "module_4775" /* 4775 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let module_4775 = module_4775_mod;
if (!module_4775) {
  const obj = { default: module_4775 };
  let tmp3 = obj;
} else {
  tmp3 = module_4775;
}
module_4775 = tmp3;
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
  return module_4775.default(arg0, Date.now());
};
export default exports.default;