// === Module 4659: ? ===

// Module 4659
import module_4475_mod from "module_4475" /* 4475 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4475 = module_4475_mod;
if (!module_4475) {
  const obj = { default: module_4475 };
  let tmp3 = obj;
} else {
  tmp3 = module_4475;
}
module_4475 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return module_4475.default(arg0, Date.now());
};
export default exports.default;