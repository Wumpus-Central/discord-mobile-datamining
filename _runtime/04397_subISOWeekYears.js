// === Module 4397: subISOWeekYears ===

// Module 4397 (subISOWeekYears)
import module_4357_mod from "module_4357" /* 4357 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;
import module_4205_mod from "module_4205" /* 4205 */;

let module_4357 = module_4357_mod;
if (!module_4357) {
  const obj = { default: module_4357 };
  let tmp3 = obj;
} else {
  tmp3 = module_4357;
}
module_4357 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4205 = module_4205_mod;
if (!module_4205) {
  const obj3 = { default: module_4205 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4205;
}
module_4205 = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4357.default(arg0, -module_4205.default(arg1));
};
export default exports.default;