// === Module 4351: subSeconds ===

// Module 4351 (subSeconds)
import module_3917_mod from "module_3917" /* 3917 */;
import module_4080_mod from "module_4080" /* 4080 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let module_3917 = module_3917_mod;
if (!module_3917) {
  const obj = { default: module_3917 };
  let tmp3 = obj;
} else {
  tmp3 = module_3917;
}
module_3917 = tmp3;
let module_4080 = module_4080_mod;
if (!module_4080) {
  const obj2 = { default: module_4080 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4080;
}
module_4080 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4080.default(arg0, -module_3917.default(arg1));
};
export default exports.default;