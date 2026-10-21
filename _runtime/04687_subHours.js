// === Module 4687: subHours ===

// Module 4687 (subHours)
import module_4406_mod from "module_4406" /* 4406 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;
import module_4256_mod from "module_4256" /* 4256 */;

let module_4406 = module_4406_mod;
if (!module_4406) {
  const obj = { default: module_4406 };
  let tmp3 = obj;
} else {
  tmp3 = module_4406;
}
module_4406 = tmp3;
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

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4406.default(arg0, -module_4256.default(arg1));
};
export default exports.default;