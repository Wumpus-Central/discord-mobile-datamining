// === Module 4061: ? ===

// Module 4061
import module_3843 from "module_3843" /* 3843 */;
import module_3876 from "module_3876" /* 3876 */;
import requiredArgs from "requiredArgs" /* 3696 */;

if (!module_3843) {
  let obj = { default: module_3843 };
  let tmp3 = obj;
} else {
  tmp3 = module_3843;
}
module_3843 = tmp3;
if (!module_3876) {
  obj = { default: module_3876 };
  let tmp5 = obj;
} else {
  tmp5 = module_3876;
}
module_3876 = tmp5;
if (!requiredArgs) {
  obj = { default: requiredArgs };
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_3876.default(arg0, module_3843.default(Date.now(), 1));
};
export default exports.default;