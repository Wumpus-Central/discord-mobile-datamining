// === Module 4408: ? ===

// Module 4408
import module_4256_mod from "module_4256" /* 4256 */;
import module_4409_mod from "module_4409" /* 4409 */;
import module_4412_mod from "module_4412" /* 4412 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let module_4256 = module_4256_mod;
if (!module_4256) {
  const obj = { default: module_4256 };
  let tmp3 = obj;
} else {
  tmp3 = module_4256;
}
module_4256 = tmp3;
let module_4409 = module_4409_mod;
if (!module_4409) {
  const obj2 = { default: module_4409 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4409;
}
module_4409 = tmp5;
let module_4412 = module_4412_mod;
if (!module_4412) {
  const obj3 = { default: module_4412 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4412;
}
module_4412 = tmp7;
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
  return module_4412.default(arg0, module_4409.default(arg0) + module_4256.default(arg1));
};
export default exports.default;