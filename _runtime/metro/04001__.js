// === Module 4001: ? ===

// Module 4001
import module_3849_mod from "module_3849" /* 3849 */;
import module_4002_mod from "module_4002" /* 4002 */;
import module_4005_mod from "module_4005" /* 4005 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let module_3849 = module_3849_mod;
if (!module_3849) {
  const obj = { default: module_3849 };
  let tmp3 = obj;
} else {
  tmp3 = module_3849;
}
module_3849 = tmp3;
let module_4002 = module_4002_mod;
if (!module_4002) {
  const obj2 = { default: module_4002 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4002;
}
module_4002 = tmp5;
let module_4005 = module_4005_mod;
if (!module_4005) {
  const obj3 = { default: module_4005 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4005;
}
module_4005 = tmp7;
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
  return module_4005.default(arg0, module_4002.default(arg0) + module_3849.default(arg1));
};
export default exports.default;