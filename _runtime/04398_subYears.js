// === Module 4398: subYears ===

// Module 4398 (subYears)
import module_3962_mod from "module_3962" /* 3962 */;
import module_4127_mod from "module_4127" /* 4127 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let module_3962 = module_3962_mod;
if (!module_3962) {
  const obj = { default: module_3962 };
  let tmp3 = obj;
} else {
  tmp3 = module_3962;
}
module_3962 = tmp3;
let module_4127 = module_4127_mod;
if (!module_4127) {
  const obj2 = { default: module_4127 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4127;
}
module_4127 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4127.default(arg0, -module_3962.default(arg1));
};
export default exports.default;