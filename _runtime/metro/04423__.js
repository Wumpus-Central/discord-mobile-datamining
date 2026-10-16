// === Module 4423: ? ===

// Module 4423
import module_4262_mod from "module_4262" /* 4262 */;
import module_4413_mod from "module_4413" /* 4413 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let module_4413 = module_4413_mod;
if (!module_4413) {
  const obj2 = { default: module_4413 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4413;
}
module_4413 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;
let c3 = 60000;

export default function addMinutes(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4413.default(interval, module_4262.default(arg1) * c3);
};
export default exports.default;