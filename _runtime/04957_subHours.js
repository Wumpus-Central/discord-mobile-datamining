// === Module 4957: subHours ===

// Module 4957 (subHours)
import module_4676_mod from "module_4676" /* 4676 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;
import module_4526_mod from "module_4526" /* 4526 */;

let module_4676 = module_4676_mod;
if (!module_4676) {
  const obj = { default: module_4676 };
  let tmp3 = obj;
} else {
  tmp3 = module_4676;
}
module_4676 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj3 = { default: module_4526 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4526;
}
module_4526 = tmp7;

export default function subHours(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4676.default(arg0, -module_4526.default(arg1));
};
export default exports.default;