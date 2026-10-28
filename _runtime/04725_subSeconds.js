// === Module 4725: subSeconds ===

// Module 4725 (subSeconds)
import module_4291_mod from "module_4291" /* 4291 */;
import module_4454_mod from "module_4454" /* 4454 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let module_4291 = module_4291_mod;
if (!module_4291) {
  const obj = { default: module_4291 };
  let tmp3 = obj;
} else {
  tmp3 = module_4291;
}
module_4291 = tmp3;
let module_4454 = module_4454_mod;
if (!module_4454) {
  const obj2 = { default: module_4454 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4454;
}
module_4454 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4454.default(arg0, -module_4291.default(arg1));
};
export default exports.default;