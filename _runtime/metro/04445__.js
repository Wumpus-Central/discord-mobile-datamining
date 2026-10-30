// === Module 4445: ? ===

// Module 4445
import module_4293_mod from "module_4293" /* 4293 */;
import module_4446_mod from "module_4446" /* 4446 */;
import module_4449_mod from "module_4449" /* 4449 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let module_4293 = module_4293_mod;
if (!module_4293) {
  const obj = { default: module_4293 };
  let tmp3 = obj;
} else {
  tmp3 = module_4293;
}
module_4293 = tmp3;
let module_4446 = module_4446_mod;
if (!module_4446) {
  const obj2 = { default: module_4446 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4446;
}
module_4446 = tmp5;
let module_4449 = module_4449_mod;
if (!module_4449) {
  const obj3 = { default: module_4449 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4449;
}
module_4449 = tmp7;
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
  return module_4449.default(arg0, module_4446.default(arg0) + module_4293.default(arg1));
};
export default exports.default;