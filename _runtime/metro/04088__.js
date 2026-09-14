// === Module 4088: ? ===

// Module 4088
import module_4080_mod from "module_4080" /* 4080 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let module_4080 = module_4080_mod;
if (!module_4080) {
  const obj = { default: module_4080 };
  let tmp3 = obj;
} else {
  tmp3 = module_4080;
}
module_4080 = tmp3;
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
  return module_4080.default(arg0, Date.now());
};
export default exports.default;