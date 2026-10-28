// === Module 4455: ? ===

// Module 4455
import module_4291_mod from "module_4291" /* 4291 */;
import module_4435_mod from "module_4435" /* 4435 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let module_4435 = module_4435_mod;
if (!module_4435) {
  const obj2 = { default: module_4435 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4435;
}
module_4435 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4435.default(arg0, 7 * module_4291.default(arg1));
};
export default exports.default;