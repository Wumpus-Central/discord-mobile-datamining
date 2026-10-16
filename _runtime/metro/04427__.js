// === Module 4427: ? ===

// Module 4427
import module_4262_mod from "module_4262" /* 4262 */;
import module_4407_mod from "module_4407" /* 4407 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let module_4262 = module_4262_mod;
if (!module_4262) {
  const obj = { default: module_4262 };
  let tmp3 = obj;
} else {
  tmp3 = module_4262;
}
module_4262 = tmp3;
let module_4407 = module_4407_mod;
if (!module_4407) {
  const obj2 = { default: module_4407 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4407;
}
module_4407 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return module_4407.default(interval, 12 * module_4262.default(arg1));
};
export default exports.default;