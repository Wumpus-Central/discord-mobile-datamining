// === Module 4354: subWeeks ===

// Module 4354 (subWeeks)
import module_3919_mod from "module_3919" /* 3919 */;
import module_4083_mod from "module_4083" /* 4083 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj = { default: module_3919 };
  let tmp3 = obj;
} else {
  tmp3 = module_3919;
}
module_3919 = tmp3;
let module_4083 = module_4083_mod;
if (!module_4083) {
  const obj2 = { default: module_4083 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4083;
}
module_4083 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4083.default(arg0, -module_3919.default(arg1));
};
export default exports.default;