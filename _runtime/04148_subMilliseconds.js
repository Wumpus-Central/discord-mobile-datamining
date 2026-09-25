// === Module 4148: subMilliseconds ===

// Module 4148 (subMilliseconds)
import module_4070_mod from "module_4070" /* 4070 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;
import module_3919_mod from "module_3919" /* 3919 */;

let module_4070 = module_4070_mod;
if (!module_4070) {
  const obj = { default: module_4070 };
  let tmp3 = obj;
} else {
  tmp3 = module_4070;
}
module_4070 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj3 = { default: module_3919 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3919;
}
module_3919 = tmp7;

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4070.default(arg0, -module_3919.default(arg1));
};
export default exports.default;