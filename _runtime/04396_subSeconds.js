// === Module 4396: subSeconds ===

// Module 4396 (subSeconds)
import module_3962_mod from "module_3962" /* 3962 */;
import module_4125_mod from "module_4125" /* 4125 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let module_4125 = module_4125_mod;
if (!module_4125) {
  const obj2 = { default: module_4125 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4125;
}
module_4125 = tmp5;
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
  return module_4125.default(arg0, -module_3962.default(arg1));
};
export default exports.default;