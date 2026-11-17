// === Module 4949: ? ===

// Module 4949
import module_4941_mod from "module_4941" /* 4941 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

let module_4941 = module_4941_mod;
if (!module_4941) {
  const obj = { default: module_4941 };
  let tmp3 = obj;
} else {
  tmp3 = module_4941;
}
module_4941 = tmp3;
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
  return module_4941.default(Date.now(), arg0);
};
export default exports.default;