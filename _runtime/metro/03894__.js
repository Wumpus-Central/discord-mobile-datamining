// === Module 3894: ? ===

// Module 3894
import module_3730_mod from "module_3730" /* 3730 */;
import module_3874_mod from "module_3874" /* 3874 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj2 = { default: module_3874 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3874;
}
module_3874 = tmp5;
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
  return module_3874.default(arg0, 7 * module_3730.default(arg1));
};
export default exports.default;