// === Module 4277: ? ===

// Module 4277
import module_4059_mod from "module_4059" /* 4059 */;
import module_4092_mod from "module_4092" /* 4092 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let module_4059 = module_4059_mod;
if (!module_4059) {
  const obj = { default: module_4059 };
  let tmp3 = obj;
} else {
  tmp3 = module_4059;
}
module_4059 = tmp3;
let module_4092 = module_4092_mod;
if (!module_4092) {
  const obj2 = { default: module_4092 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4092;
}
module_4092 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return module_4092.default(arg0, module_4059.default(Date.now(), 1));
};
export default exports.default;