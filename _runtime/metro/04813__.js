// === Module 4813: ? ===

// Module 4813
import module_4805_mod from "module_4805" /* 4805 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let module_4805 = module_4805_mod;
if (!module_4805) {
  const obj = { default: module_4805 };
  let tmp3 = obj;
} else {
  tmp3 = module_4805;
}
module_4805 = tmp3;
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
  return module_4805.default(arg0, Date.now());
};
export default exports.default;