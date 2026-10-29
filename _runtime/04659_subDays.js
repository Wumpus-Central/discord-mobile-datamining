// === Module 4659: subDays ===

// Module 4659 (subDays)
import module_4436_mod from "module_4436" /* 4436 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;
import module_4292_mod from "module_4292" /* 4292 */;

let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj = { default: module_4436 };
  let tmp3 = obj;
} else {
  tmp3 = module_4436;
}
module_4436 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj3 = { default: module_4292 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4292;
}
module_4292 = tmp7;

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4436.default(arg0, -module_4292.default(arg1));
};
export default exports.default;