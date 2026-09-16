// === Module 3882: ? ===

// Module 3882
import module_3730_mod from "module_3730" /* 3730 */;
import module_3883_mod from "module_3883" /* 3883 */;
import module_3886_mod from "module_3886" /* 3886 */;
import requiredArgs_mod from "requiredArgs" /* 3727 */;

let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj = { default: module_3730 };
  let tmp3 = obj;
} else {
  tmp3 = module_3730;
}
module_3730 = tmp3;
let module_3883 = module_3883_mod;
if (!module_3883) {
  const obj2 = { default: module_3883 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3883;
}
module_3883 = tmp5;
let module_3886 = module_3886_mod;
if (!module_3886) {
  const obj3 = { default: module_3886 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3886;
}
module_3886 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function addISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_3886.default(arg0, module_3883.default(arg0) + module_3730.default(arg1));
};
export default exports.default;