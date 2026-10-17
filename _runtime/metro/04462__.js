// === Module 4462: ? ===

// Module 4462
import module_4298_mod from "module_4298" /* 4298 */;
import module_4442_mod from "module_4442" /* 4442 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let module_4298 = module_4298_mod;
if (!module_4298) {
  const obj = { default: module_4298 };
  let tmp3 = obj;
} else {
  tmp3 = module_4298;
}
module_4298 = tmp3;
let module_4442 = module_4442_mod;
if (!module_4442) {
  const obj2 = { default: module_4442 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4442;
}
module_4442 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4442.default(arg0, 7 * module_4298.default(arg1));
};
export default exports.default;