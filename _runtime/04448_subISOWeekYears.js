// === Module 4448: subISOWeekYears ===

// Module 4448 (subISOWeekYears)
import module_4408_mod from "module_4408" /* 4408 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;
import module_4256_mod from "module_4256" /* 4256 */;

let module_4408 = module_4408_mod;
if (!module_4408) {
  const obj = { default: module_4408 };
  let tmp3 = obj;
} else {
  tmp3 = module_4408;
}
module_4408 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj3 = { default: module_4256 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4256;
}
module_4256 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4408.default(arg0, -module_4256.default(arg1));
};
export default exports.default;