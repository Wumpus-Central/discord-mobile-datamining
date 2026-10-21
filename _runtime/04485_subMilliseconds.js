// === Module 4485: subMilliseconds ===

// Module 4485 (subMilliseconds)
import module_4407_mod from "module_4407" /* 4407 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;
import module_4256_mod from "module_4256" /* 4256 */;

let module_4407 = module_4407_mod;
if (!module_4407) {
  const obj = { default: module_4407 };
  let tmp3 = obj;
} else {
  tmp3 = module_4407;
}
module_4407 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj3 = { default: module_4256 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4256;
}
module_4256 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4407.default(arg0, -module_4256.default(arg1));
};
export default exports.default;