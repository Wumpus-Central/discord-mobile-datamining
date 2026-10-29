// === Module 4725: subQuarters ===

// Module 4725 (subQuarters)
import module_4292_mod from "module_4292" /* 4292 */;
import module_4454_mod from "module_4454" /* 4454 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

let module_4292 = module_4292_mod;
if (!module_4292) {
  const obj = { default: module_4292 };
  let tmp3 = obj;
} else {
  tmp3 = module_4292;
}
module_4292 = tmp3;
let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj2 = { default: module_4454 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4454;
}
module_4454 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4454.default(arg0, -module_4292.default(arg1));
};
export default exports.default;