// === Module 4080: ? ===

// Module 4080
import module_3919_mod from "module_3919" /* 3919 */;
import module_4070_mod from "module_4070" /* 4070 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let module_4070 = module_4070_mod;
if (!module_4070) {
  const obj2 = { default: module_4070 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4070;
}
module_4070 = tmp5;
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
  return module_4070.default(interval, module_3919.default(arg1) * c3);
};
export default exports.default;