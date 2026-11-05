// === Module 4859: subMinutes ===

// Module 4859 (subMinutes)
import module_4588_mod from "module_4588" /* 4588 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;
import module_4427_mod from "module_4427" /* 4427 */;

let module_4588 = module_4588_mod;
if (!module_4588) {
  const obj = { default: module_4588 };
  let tmp3 = obj;
} else {
  tmp3 = module_4588;
}
module_4588 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_4427 = module_4427_mod;
if (!module_4427) {
  const obj3 = { default: module_4427 };
  let tmp7 = obj3;
} else {
  tmp7 = module_4427;
}
module_4427 = tmp7;

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return module_4588.default(arg0, -module_4427.default(arg1));
};
export default exports.default;