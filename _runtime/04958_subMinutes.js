// === Module 4958: subMinutes ===

// Module 4958 (subMinutes)
import module_4687_mod from "module_4687" /* 4687 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;
import module_4526_mod from "module_4526" /* 4526 */;

let module_4687 = module_4687_mod;
if (!module_4687) {
  const obj = { default: module_4687 };
  let tmp3 = obj;
} else {
  tmp3 = module_4687;
}
module_4687 = tmp3;
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

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4687.default(arg0, -module_4526.default(arg1));
};
export default exports.default;