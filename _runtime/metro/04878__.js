// === Module 4878: ? ===

// Module 4878
import module_4867_mod from "module_4867" /* 4867 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4867 = module_4867_mod;
if (!module_4867) {
  const obj = { default: module_4867 };
  let tmp3 = obj;
} else {
  tmp3 = module_4867;
}
module_4867 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return module_4867.default(Date.now(), arg0);
};
export default exports.default;