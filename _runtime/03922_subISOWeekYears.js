// === Module 3922: subISOWeekYears ===

// Module 3922 (subISOWeekYears)
import module_3882_mod from "module_3882" /* 3882 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;
import module_3730_mod from "module_3730" /* 3730 */;

let module_3882 = module_3882_mod;
if (!module_3882) {
  const obj = { default: module_3882 };
  let tmp3 = obj;
} else {
  tmp3 = module_3882;
}
module_3882 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj3 = { default: module_3730 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3730;
}
module_3730 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3882.default(arg0, -module_3730.default(arg1));
};
export default exports.default;