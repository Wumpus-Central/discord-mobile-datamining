// === Module 4417: ? ===

// Module 4417
import module_4256_mod from "module_4256" /* 4256 */;
import module_4407_mod from "module_4407" /* 4407 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj = { default: module_4256 };
  let tmp3 = obj;
} else {
  tmp3 = module_4256;
}
module_4256 = tmp3;
let module_4407 = module_4407_mod;
if (!module_4407) {
  const obj2 = { default: module_4407 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4407;
}
module_4407 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4407.default(interval, module_4256.default(arg1) * c3);
};
export default exports.default;