// === Module 4676: ? ===

// Module 4676
import module_4526_mod from "module_4526" /* 4526 */;
import module_4677_mod from "module_4677" /* 4677 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let module_4526 = module_4526_mod;
if (!module_4526) {
  const obj = { default: module_4526 };
  let tmp3 = obj;
} else {
  tmp3 = module_4526;
}
module_4526 = tmp3;
let module_4677 = module_4677_mod;
if (!module_4677) {
  const obj2 = { default: module_4677 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4677;
}
module_4677 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 3600000;

export default function addHours(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4677.default(interval, module_4526.default(arg1) * c3);
};
export default exports.default;