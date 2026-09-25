// === Module 4273: ? ===

// Module 4273
import module_4265_mod from "module_4265" /* 4265 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_4265 = module_4265_mod;
if (!module_4265) {
  const obj = { default: module_4265 };
  let tmp3 = obj;
} else {
  tmp3 = module_4265;
}
module_4265 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return module_4265.default(Date.now(), arg0);
};
export default exports.default;