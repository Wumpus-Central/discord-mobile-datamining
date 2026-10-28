// === Module 4456: ? ===

// Module 4456
import module_4291_mod from "module_4291" /* 4291 */;
import module_4436_mod from "module_4436" /* 4436 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let module_4436 = module_4436_mod;
if (!module_4436) {
  const obj2 = { default: module_4436 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4436;
}
module_4436 = tmp5;
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
  return module_4436.default(interval, 12 * module_4291.default(arg1));
};
export default exports.default;