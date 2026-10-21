// === Module 4688: subMinutes ===

// Module 4688 (subMinutes)
import module_4417_mod from "module_4417" /* 4417 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;
import module_4256_mod from "module_4256" /* 4256 */;

let module_4417 = module_4417_mod;
if (!module_4417) {
  const obj = { default: module_4417 };
  let tmp3 = obj;
} else {
  tmp3 = module_4417;
}
module_4417 = tmp3;
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

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4417.default(arg0, -module_4256.default(arg1));
};
export default exports.default;