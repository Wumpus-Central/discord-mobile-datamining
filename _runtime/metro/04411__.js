// === Module 4411: ? ===

// Module 4411
import module_4259_mod from "module_4259" /* 4259 */;
import module_4412_mod from "module_4412" /* 4412 */;
import module_4415_mod from "module_4415" /* 4415 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let module_4259 = module_4259_mod;
if (!module_4259) {
  const obj = { default: module_4259 };
  let tmp3 = obj;
} else {
  tmp3 = module_4259;
}
module_4259 = tmp3;
let module_4412 = module_4412_mod;
if (!module_4412) {
  const obj2 = { default: module_4412 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4412;
}
module_4412 = tmp5;
let module_4415 = module_4415_mod;
if (!module_4415) {
  const obj3 = { default: module_4415 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4415;
}
module_4415 = tmp7;
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
  return module_4415.default(arg0, module_4412.default(arg0) + module_4259.default(arg1));
};
export default exports.default;