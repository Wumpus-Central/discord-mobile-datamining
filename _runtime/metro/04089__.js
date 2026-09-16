// === Module 4089: ? ===

// Module 4089
import module_4081_mod from "module_4081" /* 4081 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_4081 = module_4081_mod;
if (!module_4081) {
  const obj = { default: module_4081 };
  let tmp3 = obj;
} else {
  tmp3 = module_4081;
}
module_4081 = tmp3;
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
  return module_4081.default(arg0, Date.now());
};
export default exports.default;