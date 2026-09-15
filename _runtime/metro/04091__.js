// === Module 4091: ? ===

// Module 4091
import module_4083_mod from "module_4083" /* 4083 */;
import requiredArgs_mod from "requiredArgs" /* 3729 */;

let module_4083 = module_4083_mod;
if (!module_4083) {
  const obj = { default: module_4083 };
  let tmp3 = obj;
} else {
  tmp3 = module_4083;
}
module_4083 = tmp3;
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
  return module_4083.default(arg0, Date.now());
};
export default exports.default;